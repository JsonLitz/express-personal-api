var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var ProfileSchema = new Schema({
      name: String,
      current_city: String,
      birth_date: String,
      github_link: String,
      github_profile_image: String,
      factoids:
          {
              hobbies: String,
              favFoods: String,
              weaknesses: String,
          }

      });


    var Profile= mongoose.model('Profile', ProfileSchema);
    module.exports = Profile;
