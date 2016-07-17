// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var newCities =[
    {
    city: 'Atlanta',
    state: 'Georgia',
    photo:'asd',
    state_bird:''
    },
    {
    city: 'New York City',
    state: 'New York',
    photo:'asd',
    state_bird:''
    },
    {
    city: 'San Antonio',
    state: 'Texas',
    photo:'asd',
    state_bird:''
    }
];
// var profile = [
//   {
//     name: "Jason Lee",
//     current_city: "San Francisco",
//     birth_date: "February 7,",
//     github_link: "https://github.com/JsonLitz",
//     github_profile_image: "https://avatars0.githubusercontent.com/u/15699145?v=3&s=460",
//     factoids:[
//         {
//         hobbies: "cycling, drawing, movies",
//         favFoods: "mexican, vietnamese, korean",
//         weaknesses: "fire, bullets, mildly cold weather, lasers"
//         }]
//
//   }
// ];
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
    // //   db.City.remove({}, function(err, books){
    // //     console.log('removed all books');
    // //     books_list.forEach(function (bookData) {
    // //       var book = new db.Book({
    // //         title: bookData.title,
    // //         image: bookData.image,
    // //         releaseDate: bookData.releaseDate
    // //       });
    // //       db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
    // //         console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
    // //         if (err) {
    // //           console.log(err);
    // //           return;
    // //         }
    // //         book.author = foundAuthor;
    // //         book.save(function(err, savedBook){
    // //           if (err) {
    // //             return console.log(err);
    // //           }
    // //           console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
    // //         });
    // //       });
    //     });
    //   });

      process.exit();
    });
  }



});
