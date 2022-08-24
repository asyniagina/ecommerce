import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import { readFile } from 'fs/promises'

import config from './config'
import Html from '../client/html'

require('colors')

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/', (req, res) => {
  res.send('Express server')
})

server.get('/api/v1/products', async (req, res) => {
  const arrayOfProducts = await readFile(`${__dirname}/data/data.json`, 'utf-8')
    .then((data) => {
      return JSON.parse(data)
    })
    .catch((error) => {
      console.log(error)
      return []
  })
  res.json(arrayOfProducts.slice(0,50))
})

const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
const mockRates = { "CAD": 1.3, "EUR": 0.9, "USD":1 }

server.get('/api/v1/currency', async (req, res) => {
  const currency = await axios(url)
    .then(({ data }) => data.rates)
    .catch(() => mockRates)
  res.json(currency)
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
