'use strict'

const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', (req, res) => {
  fs.createReadStream(__filename).pipe(res)
})

server.on('connection', socket => {
  console.log(socket)
})

server.on('listening', () => {
  console.log('Servidor escuchando')
})

server.listen(9999)
