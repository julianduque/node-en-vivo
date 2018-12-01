'use strict'

const fs = require('fs')
const through = require('through2')

const pass = through(function transform (chunk, encoding, callback) {
  const data = chunk.toString('utf8')
  const modified = data.replace(/setTimeout/g, 'setImmediate')
  callback(null, Buffer.from(modified))
})

const writable = fs.createWriteStream('callbacks_modified.js')
const readable = fs.createReadStream('callbacks.js')

readable
  .pipe(pass)
  .pipe(process.stdout)
