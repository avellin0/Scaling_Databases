require('dotenv').config()
import {Client} from 'pg'

const cliente = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASS,
  port: process.env.DATABASE_PORT as number | undefined
})

cliente.connect()

export default cliente;

