'use strict'

const path = require('path')
const { start, job } = require('microjob')
const express = require('express')
const app = express()
const primesPath = path.resolve(__dirname, 'primes.js')

app.get('/sum-primes', async (req, res) => {
  const { limit } = req.query
  const sum = await job(({ limit, primesPath }) => {
    const { sumPrimes } = require(primesPath)
    return sumPrimes(limit)
  }, {
    data: {
      limit: +limit,
      primesPath
    }
  })
  res.send(`The sum for limit: ${limit} is ${sum}`)
})

app.listen(8888, async () => {
  await start()
  console.log('Listening with worker pool')
})
