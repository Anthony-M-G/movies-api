import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
})
const query = async (query, data) => {
  try {
    const res = await pool.query(query, data)
    console.log(res.rows)
    return res.rows
  } catch (err) {
    console.log('error:' + err)
    return null
  }
}

export default query
