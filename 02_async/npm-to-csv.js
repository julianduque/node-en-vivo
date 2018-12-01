'use strict'

const request = require('request')
const JSONStream = require('JSONStream')
const through = require('through2')
const csv = require('csv-write-stream')

request({ url: 'https://skimdb.npmjs.com/registry/_changes' })
  .pipe(JSONStream.parse('results.*'))
  .pipe(through.obj(function onChunk (chunk, encoding, callback) {
    if (chunk.seq && chunk.id) {
      callback(null, { id: chunk.seq, name: chunk.id })
      return
    }
    callback()
  }))
  .pipe(csv({ headers: [ 'id', 'name' ] }))
  .pipe(process.stdout)
