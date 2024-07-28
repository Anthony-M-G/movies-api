import { Router } from 'express'

export const createRouter = ({ moviesController }) => {
  const router = Router()
  /**
   * @swagger
   * /movies:
   *   get:
   *     summary: Get a list of all movies
   *     tags: [Movies]
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: [{}]
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             example:
   *               error:
   *                 message: "Bad Request"
   */
  router.get('/', moviesController.getAllMovies)

  /**
   * @swagger
   * /movies/{genre}:
   *   get:
   *     summary: Get a list of movies by genre
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: genre
   *         required: true
   *         schema:
   *           type: string
   *         description: Genre of the movie
   *         example: "action"
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: [{}]
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             example:
   *               error:
   *                 message: "Bad Request"
   */
  router.get('/:genre', moviesController.getMovieByGenre)

  /**
   * @swagger
   * /movies/movie/{id}:
   *   get:
   *     summary: Get a movie by ID
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the movie
   *         example: "123"
   *     responses:
   *       200:
   *         description: Successful response
   *         content:
   *           application/json:
   *             example:
   *               data: {}
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             example:
   *               error:
   *                 message: "Bad Request"
   */
  router.get('/movie/:id', moviesController.getMovieById)

  /**
   * @swagger
   * /movies/add-movie:
   *   post:
   *     summary: Add a new movie
   *     tags: [Movies]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *
   *               title:
   *                 type: string
   *               director:
   *                 type: string
   *               release_year:
   *                 type: integer
   *               genre:
   *                 type: array
   *                 items:
   *                   type: string
   *               rating:
   *                 type: double
   *             example:
   *
   *               title: "Fight Club"
   *               director: "David Fincher"
   *               release_year: 1999
   *               genre: ["Drama"]
   *               rating: 8.8
   *     responses:
   *       201:
   *         description: Movie created successfully
   *         content:
   *           application/json:
   *             example:
   *               data: {}
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             example:
   *               error:
   *                 message: "Bad Request"
   */
  router.post('/add-movie', moviesController.createMovie)

  /**
   * @swagger
   * /movies/update-movie/{id}:
   *   put:
   *     summary: Update a movie by ID
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the movie
   *         example: "123"
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *
   *               title:
   *                 type: string
   *               director:
   *                 type: string
   *               release_year:
   *                 type: integer
   *               genre:
   *                 type: array
   *                 items:
   *                   type: string
   *               rating:
   *                 type: double
   *             example:
   *
   *               title: "Fight Club"
   *               director: "David Fincher"
   *               release_year: 1999
   *               genre: ["Drama"]
   *               rating: "8.8"
   *     responses:
   *       200:
   *         description: Movie updated successfully
   *         content:
   *           application/json:
   *             example:
   *               data: {}
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             example:
   *               error:
   *                 message: "Bad Request"
   */
  router.put('/update-movie/:id', moviesController.updateMovie)

  return router
}
