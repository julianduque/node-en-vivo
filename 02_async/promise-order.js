'use strict'

console.log('script start')

process.nextTick(function () {
  console.log('nextTick')
})

Promise.resolve().then(function () {
  console.log('promise1')
}).then(function () {
  console.log('promise2')
})

console.log('script end')
