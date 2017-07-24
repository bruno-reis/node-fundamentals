'use strict'
const mongoose = require('mongoose')


const instructorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isHilarious: {type: Boolean, default: true},
  favouriteColours: [String],
  createdAt: {type: Date, default: Date.now}
})

const Instructor = mongoose.model('Instructor', instructorSchema)

module.exports = Instructor

