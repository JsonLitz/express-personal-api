// require express and other modules
var express     = require('express'),
    bodyParser  = require('body-parser'),
    db          = require('./models');
    app         = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
app.use(express.static('public'));

/*
 * HTML Endpoints
 */
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');

});

////////////////////
//  DATA
///////////////////

var profile = [{
  name: "Jason Lee",
  current_city: "San Francisco",
  birth_date: "February 7,",
  github_link: "https://github.com/JsonLitz",
  github_profile_image: "https://avatars0.githubusercontent.com/u/15699145?v=3&s=460",
  factoids: [{
    hobbies: "cycling, drawing, movies",
    favFoods: "mexican, vietnamese, korean",
    weaknesses: "fire, bullets, mildly cold weather, lasers"
  }]

}];

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/JsonLitz",
    base_url: "https://calm-fjord-77914.herokuapp.com/",
    endpoints: [{
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
      }, {
        method: "GET",
        path: "/api/profile",
        description: "Data about me"
      }, {
        method: "GET",
        path: "/api/cities",
        description: "New cities"
      }, {
        method: "GET",
        path: "/api/cities/:id",
        description: "City by ID"
      }

    ]
  });

  //find all cities
  app.get('/api/cities', function(req, res) {
    db.City.find(function(err, cities) {
      if (err) {
        return console.log("index error: " + err);
      }
      res.json(cities);
    });
  });

  //find one city by id
  app.get('/api/cities/:id', function(req, res) {
      
    db.City.findById(req.params.id, function(err, city) {
      if (err) {
        return console.log("show error: " + err);
      }
      res.json(city);
    });
  });

  //find profile
  app.get('/api/profile', function(req, res) {
    res.json(profile);
  });

  // delete book
  app.delete('/api/cities/:id', function(req, res) {
    // get city id from url params (`req.params`)
    console.log(req.params);
    var cityId = req.params.id;

    db.City.findOneAndRemove({
      _id: cityId
  }, function(err, deletedCity) {
      res.json(deletedCity);
    });
  });
});


app.post('/api/cities', function(req, res) {
  // create new book with form data (`req.body`)
  var newCity = new db.City({
    name: req.body.city,
    state: req.body.state,
    photo: req.body.photo,
    state_bird:req.body.state_bird,
  });
newCity.save(function handleDBCities(err, savedCity) {
    res.redirect('/');
});
  console.log(newCity.name);

  // var newBook = new db.Book({
  //   title: req.body.title,
  //   author: newAuthor,
  //   image: req.body.image,
  //   releaseDate: req.body.releaseDate,
  // });
  // this code will only add an author to a book if the author already exists
//   db.Author.findOne({
//     name: req.body.city
//   }, function(err, author) {
//     console.log('author', author);
//     console.log('err', err);
//     newBook.author = author;
//     // add newBook to database
//     newBook.save(function(err, book) {
//       if (err) {
//         return console.log("create error: " + err);
//       }
//       console.log("created ", book.title);
//       res.json(book);
    });
//   });
// });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is up and running on http://localhost:3000/');
});
