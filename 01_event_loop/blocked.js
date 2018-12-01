'use strict'

const start = Date.now()

setTimeout(function A () {
  let count = 0
  while (++count < 1e9) { Math.random() }
}, 100)

setTimeout(function B () {
  console.log(`pasó: ${Date.now() - start} ms`)
}, 105)
