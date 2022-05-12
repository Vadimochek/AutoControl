const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  number: {type: String, required: true, unique: true},
  model: {type: String},
  kind: {type: String},
  placeList: [{ type: Types.ObjectId, ref: 'Geo' }],
  insideList: [{ type: Types.ObjectId, ref: 'Inside'}],
  owner: {type: String}
})

module.exports = model('Auto', schema)