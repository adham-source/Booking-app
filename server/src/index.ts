import express, { Application } from 'express'
import keys from './config/keys'

const { PORT } = keys

const app: Application = express()

const port: number = 4000 || PORT

app.listen(port, (): void => console.info(`Server is running on : http://localhost:${port}`))