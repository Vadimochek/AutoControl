const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  time: {type: Date, required: true, unique: true},
  coordinates: {type: String, required: true},
})

module.exports = model('Geo', schema)