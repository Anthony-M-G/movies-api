export class MoviesController {
  constructor (moviesService) {
    this.moviesService = moviesService
  }

  getAllMovies = async (req, res) => await this.moviesService.getAllMoviesService(req, res)

  getMovieByGenre = async (req, res) => await this.moviesService.getMovieByGenreService(req, res)

  createMovie = async (req, res) => {
    return await this.moviesService.createMovieService(req, res)
  }

  updateMovie = async (req, res) => {
    return await this.moviesService.updateMovieService(req, res)
  }

  getMovieById = async (req, res) => {
    return await this.moviesService.getMovieByIdService(req, res)
  }
}
