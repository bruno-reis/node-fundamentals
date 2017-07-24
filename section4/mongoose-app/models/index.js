'use strict'
const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/test')

mongoose.Promise = global.Promise

module.exports.Instructor = require('./instructors')