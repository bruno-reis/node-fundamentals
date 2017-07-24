const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/pets-app', {useMongoClient: true})
mongoose.Promise = Promise

module.exports.Pet = require('./pet')