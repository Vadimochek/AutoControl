const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  number: {type: String, required: true, unique: true},
  model: {type: String},
  kind: {type: String},
  owner: {type: String}
})

module.exports = model('Auto', schema)