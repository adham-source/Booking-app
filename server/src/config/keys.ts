import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env

const keys = {
   PORT: Number(PORT)
}

export default keys