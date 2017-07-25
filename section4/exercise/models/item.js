const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item