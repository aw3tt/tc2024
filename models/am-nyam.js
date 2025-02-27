var mongoose = require('mongoose')
var Schema = mongoose.Schema

var am_nyamSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: String,
  desc: String,
  created: {
    type: Date,
    default: Date.now,
  },
})
module.exports.Am_nyam = mongoose.model('Am_nyam', am_nyamSchema)
