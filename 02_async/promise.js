'use strict'

const fs = require('fs')
const { promisify } = require('util')

console.log('start script')

const readFile = promisify(fs.readFile)

function readFileWrapped (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, file) => {
      if (err) {
        reject(err)
        return
      }

      resolve(file)
    })
  })
}

function chainable () {
  return new Promise((resolve, reject) => {
    resolve('im first')
  })
}

chainable()
  .then(function onFirst (value) {
    console.log(value)
    return 'im last'
  })
  .then(function onLast (value) {
    return Promise.reject(new Error('error'))
  })

readFile('notexistant', 'utf8')
  .then(file => {
    console.log(file)
  })
  .catch(err => {
    console.log(err)
  })

const p1 = readFile('package.json', 'utf8')
const p2 = readFile(__filename)
const p3 = readFile('fs.js')

Promise.race([
  p1,
  p2,
  p3
]).then(values => {
  console.log(values)
})

process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

// fs.readFile(__filename, 'utf8', (err, file) => {
//   if (err) {
//     throw err
//   }

//   console.log(file)
// })

console.log('end script')
