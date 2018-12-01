'use strict'

const http = require('http')
const fs = require('fs')

const server = http.createServer(function handler (req, res) {
  // fs.readFile(__filename, function onReadFile (err, file) {
  //   if (err) {
  //     res.statusCode = 500
  //     return res.end(err.message)
  //   }

  //   res.end(file)
  // })
  res.end(fs.readFileSync(__filename))
})

server.listen(9999)
