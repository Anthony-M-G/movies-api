import z from 'zod'

const movieSchema = z.object({
  title: z.string().min(2),
  director: z.string().min(1),
  release_year: z.number().int().min(1900).max(2025),
  genre: z.array(z.string().min(3)),
  rating: z.number().min(1).max(10)
})

export function validatePutOrPatch (params) {
  return movieSchema.partial().safeParse(params)
}

export function validateMovie (movie) {
  return movieSchema.safeParse(movie)
}
