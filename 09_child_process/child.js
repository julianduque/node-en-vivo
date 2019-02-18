'use strict'

let number = process.argv[2]
console.time('while')
while (number > 0) {
  number--
}
console.timeEnd('while')

process.send({ hello: 'Father' })
