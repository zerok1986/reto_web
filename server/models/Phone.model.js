const { Schema, model } = require('mongoose')

const phoneSchema = new Schema(
  {
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: {
      type: Number,
      required: true,
    },
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,
  },
  { timestamps: true }
)
const Phone = model('Phone', phoneSchema)
module.exports = Phone