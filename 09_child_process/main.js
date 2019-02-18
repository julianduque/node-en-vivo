'use strict'

const { Worker } = require('worker_threads')

function createWorker (workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData
    })
    worker.on('message', message => {
      console.log(`Received from worker`, message)
      resolve(message)
    })
    worker.on('error', err => {
      reject(err)
    })
    worker.on('exit', exitCode => {
      if (exitCode !== 0) {
        reject(new Error('Something bad happened'))
      }
    })
    worker.on('online', () => {
      console.log(`${worker.threadId} is online`)
    })
  })
}

createWorker({ hello: 'Node En Vivo', number: 1e10 }).then(result => {
  console.log('El worker me entregó:', result)
}).catch(err => {
  console.error(err)
})
