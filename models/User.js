const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const UserScheme = new Schema({
  name: String,
  first_name: String,
  last_name: String,
  username: String,
  id: Number,
  access: {type: Number, default: 0},
  state: {type: String, default: ''},
  lang: {type: String, default: 'unknown'},
});

module.exports = mongoose.model('User', UserScheme);