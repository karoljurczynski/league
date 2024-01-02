import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes'
import { routes } from './routes/constants'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use(routes.index, router)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

export default app
