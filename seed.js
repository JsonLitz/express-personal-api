// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var newCities =[
    {
    city: 'Atlanta',
    state: 'Georgia',
    photo:'url:http://www.konbini.com/us/files/2016/03/outkast.jpg',
    state_bird:'Brown Thrasher'
    },
    {
    city: 'New York City',
    state: 'New York',
    photo:'asd',
    state_bird:'Eastern bluebird'
    },
    {
    city: 'San Antonio',
    state: 'Texas',
    photo:'asd',
    state_bird:'Northern mockingbird'
    }
];

db.City.remove({}, function(err, cities) {
  if (err) {
    console.log('Error occurred in remove', err);
    return;
  } else {
    console.log('removed all cities');

    db.City.create(newCities, function(err, cities){
      if (err) {
         console.log('err', err);
      }
      console.log("created" +  cities.length + "cities");

      process.exit();
    });
  }



});
