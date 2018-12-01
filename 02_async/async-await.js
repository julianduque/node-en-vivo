'use strict'

const fs = require('fs')
const { promisify } = require('util')
const sleep = require('then-sleep')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function main () {
  try {
    const file = await readFile('file.json', 'utf8')
    console.log('Tenemos el archivo', file)
    const parsed = JSON.parse(file)
    await sleep(500)
    console.log(parsed)
    console.log('Vamos a escribir')
    await writeFile('copy.js', file)
    await sleep(500)
    console.log('Terminamos')
  } catch (e) {
    console.error(e.message)
  }
}

main()
