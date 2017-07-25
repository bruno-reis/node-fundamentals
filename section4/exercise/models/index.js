const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/item-app', {useMongoClient: true})
mongoose.Promise = Promise

module.exports.Item = require('./item')