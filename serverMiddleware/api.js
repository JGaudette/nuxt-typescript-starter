import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.end('Everything ok!')
})

export default {
  path: '/api',
  handler: app
}

