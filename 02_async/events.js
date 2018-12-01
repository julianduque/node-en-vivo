'use strict'

const EventEmitter = require('events')
const events = new EventEmitter()
const fs = require('fs')

function onPing () {
  console.log('Recibí un ping')
}

function onSecondPing () {
  console.log('Recibí otro ping')
  events.emit('pong')
}

events.on('ping', onPing)
events.on('ping', onSecondPing)

events.once('pong', function onPong () {
  console.log('Solo un pong!')
  events.removeListener('ping', onSecondPing)
  fs.readFile('noexist', err => events.emit('error', err))
})

events.on('error', err => {
  console.log(err.message)
})

// events.removeAllListeners('pong')

events.emit('ping')
events.emit('ping')

process.on('uncaughtException', err => {
  console.log(err.message)
  process.exit(1)
})
