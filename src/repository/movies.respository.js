/* eslint-disable camelcase */
import query from '../database/database.js'

class MoviesRepository {
  async getAllMovies () {
    const response = await query('SELECT * FROM movies ORDER BY title ASC')
    return response
  }

  async getMovieByGenre (genre) {
    const genreFormmated = genre.replace(genre.charAt(0), genre.charAt(0).toUpperCase())
    console.log(genreFormmated)
    const response = await query('SELECT * FROM movies WHERE $1 = ANY(genre) ORDER BY rating DESC', [genreFormmated])
    console.log(response)
    return response
  }

  async createMovie (movie) {
    const { title, director, release_year, genre, rating } = movie
    const result = await query(
      'INSERT INTO movies (title, director, release_year, genre, rating) VALUES ($1, $2, $3,$4,$5) RETURNING *',
      [title, director, parseInt(release_year), genre, parseInt(rating)]
    )
    return result
  }

  async updateMovie (id, movie) {
    const { title, director, release_year, genre, rating } = movie
    const result = await query(
      'UPDATE MOVIES SET TITLE=$1, DIRECTOR=$2, RELEASE_YEAR=$3, GENRE=$4, RATING=$5 WHERE ID=$6 RETURNING *',
      [title, director, parseInt(release_year), genre, parseInt(rating), parseInt(id)]
    )
    return result
  }

  async getMovieById (id) {
    const response = await query('SELECT * FROM movies WHERE id = $1', [id])
    return response
  }
}

export default new MoviesRepository()
