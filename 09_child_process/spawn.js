'use strict'

const { spawn } = require('child_process')

const ps = spawn('ping', ['-c', '5', 'google.com'])

ps.stdout.setEncoding('utf8')
ps.stdout.on('data', data => {
  console.log(data)
})

ps.stderr.setEncoding('utf8')
ps.stderr.on('data', data => {
  console.error('err', data)
})

ps.on('close', (exitCode, signal) => {
  console.log(exitCode, signal)
})
