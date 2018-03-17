var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
  name: String,
  address1: String,
  address2: String,
  address3: String,
  useTva: Boolean,
  tva: String
});

module.exports = mongoose.model('Client', ClientSchema);
