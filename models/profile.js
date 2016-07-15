var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// var ProfileSchema = new Schema({
//      Name: 'Jason Lee',
//      age: 31,
//      gender: 'male'
//     // you should fill the rest of this in
// });

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
