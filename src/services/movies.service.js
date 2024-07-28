import { validateMovie, validatePutOrPatch } from '../schemas/movie.schema.js'

export class MoviesService {
  constructor (moviesRepository) {
    this.moviesRepository = moviesRepository
  }

  getAllMoviesService = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    const response = await this.moviesRepository.getAllMovies()
    return response === null
      ? res
        .status(500)
        .json({ err: 'Problema al recuperar los datos de la base de datos' })
      : res.status(200).json(response)
  }

  getMovieByGenreService = async (req, res) => {
    const { genre } = req.params
    const response = await this.moviesRepository.getMovieByGenre(genre)
    return response === null
      ? res
        .status(404)
        .json({ err: 'Problema al recuperar los datos de la base de datos' })
      : res.json(response)
  }

  createMovieService = async (req, res) => {
    const validMovie = validateMovie(req.body)
    if (validMovie.error) {
      const errores = { ...validMovie.error.formErrors.fieldErrors }
      return res.status(422).json({ ...errores })
    }
    const result = await this.moviesRepository.createMovie(req.body)
    return result === null
      ? res.status(400).json(result)
      : res.status(201).json({ message: 'Creado con éxito' })
  }

  updateMovieService = async (req, res) => {
    const validateNewParams = validatePutOrPatch(req.body)
    if (validateNewParams.error) {
      const errors = { ...validateNewParams.error.formErrors.fieldErrors }
      return res.status(422).json({ ...errors })
    }
    const result = await this.moviesRepository.updateMovie(
      req.params.id,
      req.body
    )
    return result === null
      ? res.status(400).json(result)
      : res.status(201).json({ message: 'Actualizado con éxito' })
  }

  getMovieByIdService = async (req, res) => {
    const { id } = req.params
    const movie = await this.moviesRepository.getMovieById(parseInt(id))

    return movie === null || movie.length === 0
      ? res
        .status(422)
        .send({ message: 'No se encontró la movie con el id requerido' })
      : res.status(200).json(movie)
  }
}
