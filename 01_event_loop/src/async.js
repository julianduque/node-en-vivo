'use strict'

// Timer
setTimeout(function () {
  console.log('Timeout')
}, 0)

// Check
setImmediate(function () {
  console.log('Immediate')
})

// After next phase
process.nextTick(function () {
  console.log('Tick')
})
