'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 9999

console.log(process.env)

app.get('/', (req, res) => {
  res.send(`Hello from Node ${process.version}`)
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

process.on('SIGINT', signal => {
  console.log(`Process exiting due to ${signal}`)
  process.exit(0)
})
