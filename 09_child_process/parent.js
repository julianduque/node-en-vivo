'use strict'

const { fork } = require('child_process')

const ps = fork('./child.js', [1e3])

ps.on('message', message => {
  console.log(`Received from child`, message)
})

ps.on('close', (exitCode, signal) => {
  console.log(exitCode, signal)
})
