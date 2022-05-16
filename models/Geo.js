const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  time: {type: Date, required: true, unique: true},
  coordinates: {type: String, required: true},
  auto: {type: String}
})

module.exports = model('Geo', schema)