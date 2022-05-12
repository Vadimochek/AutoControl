const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  time: {type: Date, required: true},
  oil: {type: Double, required: true},
  benzine: {type: Double, required: true},
  chargeAcc: {type: Double, required: true},
  humidity: {type: Double, required: true},
  temperature: {type: Double, required: true},
})

module.exports = model('Inside', schema)