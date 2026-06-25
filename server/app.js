import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import apiRouter from './routes/index.js'
import { errorHandler } from './middlewares/error.middleware.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', apiRouter)

app.get('/', (req,res)=>{
  res.send({ status: 'ok', message: 'ROY MART API' })
})

app.use(errorHandler)

export default app
