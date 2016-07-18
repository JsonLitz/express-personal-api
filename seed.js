// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
var outkast = './public/images/outkast.jpg';
var empire = './public/images/empire.gif';

var newCities =[
    {
    city: 'Atlanta',
    state: 'Georgia',
    photo: outkast,
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
    },
    {
    city: 'Baltimore',
    state: 'Maryland',
    photo:'asd',
    state_bird:'Baltimore oriole'
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
