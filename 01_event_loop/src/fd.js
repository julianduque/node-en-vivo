'use strict'

const fs = require('fs')

fs.open(__filename, 'r', function (err, fd) {
  console.log(fd)
  fs.read(fd)
})
