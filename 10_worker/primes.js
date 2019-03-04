'use strict'

function isPrime (number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if ((number % i) === 0) return false
  }
  return true
}

function genPrimes (limit) {
  const range = [...Array(limit + 1).keys()].slice(2)
  return range.filter(n => isPrime(n))
}

function sumPrimes (limit) {
  return genPrimes(limit).reduce((a, b) => a + b, 0)
}

module.exports = {
  isPrime,
  genPrimes,
  sumPrimes
}
