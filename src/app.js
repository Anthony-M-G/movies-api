import express from 'express'
import { MoviesController } from './controller/movies.controller.js'
import morgan from 'morgan'
import { createRouter } from './routes/movies.routes.js'
import { MoviesService } from './services/movies.service.js'
// Swagger
import swaggerUiExpress from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import options from './doc/swagger.js'

export function initApp (moviesRepository) {
  const moviesService = new MoviesService(moviesRepository)
  const moviesController = new MoviesController(moviesService)
  const port = process.env.PORT || 3000
  const app = express()
  // Middleswares
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use('/movies', createRouter({ moviesController }))
  app.use('/api-doc', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJsdoc(options)))
  //
  app.listen(port, () => {
    console.log(`Running on port ${port}`)
  })
}
