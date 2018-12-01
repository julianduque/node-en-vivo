'use strict'

const later = function () {
  console.log('Despues')
}

console.log('Hola!')

setTimeout(later, 100)
