'use strict'

const EventEmitter = require('events')

class User extends EventEmitter {
  save (user) {
    const { name, email } = user
    console.log('Guardar en DB', name, email)
    setTimeout(() => {
      user.id = Math.round(Math.random() * 1000)
      this.emit('save', user)
    }, 500)
  }
}

const myUser = new User()

myUser.save({ name: 'Stevens', email: 'stevenescol@gmail.com' })

myUser.on('save', user => {
  console.log('Hemos guardado', user)
})
