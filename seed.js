// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var cities = [
{
    city: 'Atlanta',
    state: 'Georgia',
    photo:'asd',
    state_bird:""
},
{
    city: 'New York City',
    state: 'New York',
    photo:'asd',
    state_bird:""
},
{
    city: 'San Antonio',
    state: 'Texas',
    photo:'asd',
    state_bird:""
}
];
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

db.City.remove({}, function(err, cities) {
  if (err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all cities');

    db.City.create(cities_list, function(err, cities){
      if (err) {
        return console.log('err', err);
      }
      console.log("created" +  cities.length + "cities");
      process.exit();
    });
  }
});
