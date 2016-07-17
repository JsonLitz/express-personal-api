var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
  city: String,
  state: String,
  photo: String,
  state_bird: String,
});

var City = mongoose.model('City', CitySchema);

module.exports = City;
