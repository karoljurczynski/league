import { Pool } from 'pg'
import { configDotenv } from 'dotenv'

configDotenv()

const port = Number(process.env.DB_PORT)

export const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'db',
  port
})
