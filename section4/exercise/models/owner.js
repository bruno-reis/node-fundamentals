const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: String,
  // items: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Item'
  // }]
})

const Owner = mongoose.model('User', userSchema)

module.exports = Owner