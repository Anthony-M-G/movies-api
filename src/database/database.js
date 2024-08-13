import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
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

console.log(process.env.DB_CONNECTION_STRING)

export default query
