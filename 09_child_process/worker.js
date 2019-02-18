'use strict'

const { parentPort, workerData } = require('worker_threads')

let { hello, number } = workerData

while (number > 0) {
  number--
}

parentPort.postMessage(hello)
