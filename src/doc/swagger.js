import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description:
        'API documentation for the Movies API using Express and Postgres and methods like GET, POST, PUT and DELETE',
      contact: {
        name: 'Antony Medina'
      },
      servers: [
        {
          url: 'http://localhost:9000'
        }
      ]
    }
  },
  apis: [join(__dirname, '../routes/*.js')]
}

export default options
