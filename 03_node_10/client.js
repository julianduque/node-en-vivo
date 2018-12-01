'use strict'

const http2 = require('http2')
const fs = require('fs')

const client = http2.connect('https://localhost:8443', {
  ca: fs.readFileSync('localhost-cert.pem')
})

client.on('error', err => console.error(err))

async function doRequest () {
  const req = client.request({ ':path': '/' })

  req.on('response', (headers, flags) => {
    for (const name in headers) {
      console.log(`${name}: ${headers[name]}`)
    }

    for (const name in flags) {
      console.log(`${name}: ${flags[name]}`)
    }
  })

  req.setEncoding('utf8')
  let data = ''
  for await (const chunk of req) {
    data += chunk
  }
  console.log(`\n${data}`)
  client.close()

  // req.on('data', chunk => {
  //   data += chunk
  // })
  // req.on('end', () => {
  //   console.log(`\n${data}`)
  //   client.close()
  // })
  // req.end()
}

doRequest().catch(err => console.error(err))
