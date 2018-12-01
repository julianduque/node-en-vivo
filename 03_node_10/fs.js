'use strict'

const fs = require('fs').promises
const dns = require('dns').promises

async function main () {
  const file = await fs.readFile(__filename, 'utf8')
  console.log(file)

  const ip = await dns.lookup('nodejs.org')
  console.log(ip)
}

main().catch(err => console.error(err))
