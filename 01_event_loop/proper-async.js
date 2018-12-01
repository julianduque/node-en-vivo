'use strict'

let bar

function domeSomething (callback) {
  process.nextTick(callback)
}

domeSomething(function () {
  console.log('bar', bar)
})

bar = 1
