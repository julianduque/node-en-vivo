'use strict'

const https = require('https')
const fs = require('fs')
const path = require('path')

const options = {
  key: fs.readFileSync(path.join(__dirname, 'envivo.key')),
  cert: fs.readFileSync(path.join(__dirname, 'envivo.cert'))
}

const server = https.createServer(options, requestHandler)

function requestHandler (req, res) {
  res.end('Hola Node En Vivo!')
}

server.listen(8443, () => {
  console.log('Started in port 8443')
})
