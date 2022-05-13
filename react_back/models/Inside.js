const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  time: {type: Date, required: true},
  oil: {type: Number, required: true},
  benzine: {type: Number, required: true},
  chargeAcc: {type: Number, required: true},
  humidity: {type: Number, required: true},
  temperature: {type: Number, required: true},
  auto: {type: String}
})

module.exports = model('Inside', schema)