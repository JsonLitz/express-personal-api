var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CitySchema = new Schema({
  city: String, 
  state: Number,
  photo: Array,
  state_bird: String,
});

var Trip = mongoose.model('city', CitySchema);

module.exports = City;
