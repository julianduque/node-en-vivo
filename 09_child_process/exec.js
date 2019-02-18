'use strict'

const { exec } = require('child_process')
const os = require('os')
const path = require('path')

const cwd = path.join(os.homedir(), 'Personal', 'NodeEnVivo')

exec('ping google.com', {
  cwd,
  maxBuffer: 30,
  timeout: 1000
}, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    // return
  }

  console.log('stdout', stdout)
  console.log('stderr', stderr)
})
