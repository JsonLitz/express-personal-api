// require express and other modules
var express    = require('express'),
    bodyParser = require('body-parser'),
    db         = require('./models');
    app        = express();

// parse incoming urlencoded form data
// and populate the req.body object
// var db = require('./models');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
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

var profile = [
  {
    name: "Jason Lee",
    current_city: "San Francisco",
    birth_date: "February 7,",
    github_link: "https://github.com/JsonLitz",
    github_profile_image: "https://avatars0.githubusercontent.com/u/15699145?v=3&s=460",
    factoids:[
        {
        hobbies: "cycling, drawing, movies",
        favFoods: "mexican, vietnamese, korean",
        weaknesses: "fire, bullets, mildly cold weather, lasers"
        }]

  }
];
// var cities = [
//   {
//     name: "Jason Lee",
//     current_city: "San potato",
//     birth_date: "potato 7,",
//     github_link: "https://github.com/JsonLitz",
//     github_profile_image: "https://avatars0.githubusercontent.com/u/15699145?v=3&s=460",
//     factoids:[
//         {
//         hobbies: "potato, potato, movies",
//         favFoods: "potato, potato, korean",
//         weaknesses: "potato, bullets, mildly cold weather, lasers"
//         }]
//
//   }
// ];

/*
 * JSON API Endpoints
 */



//  app.get('/api/cities', function (req, res) {
//   db.City.find()
//  .populate('city')
//  .exec(function(err, cities){
//     if (err) {
//         console.log('cities');
//       return console.log("Error: ", err);
//     }
//     res.json(cities);
//     console.log('cities');
//
//   });
// });


app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/JsonLitz",
    base_url: "https://calm-fjord-77914.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/cities", description: "New cities"}
    ]
});


app.get('/api/cities', function (req, res){
  db.City.find(function(err, cities){
     if (err) { return console.log("index error: " + err); }
     res.json(cities);
  });
});

app.get('/api/cities/:id', function(req, res) {
  // find one book by its id
  db.City.findById(req.params.id, function(err, city) {
    if (err) {
      return console.log("show error: " + err);
    }
    res.json(city);
  });
});

app.get('/api/profile', function (req, res){
    // db.Profile.find(function(err, profiles){
    //     if (err) {return console.log("index error: " + err);}
        res.json(profile);
    });
});

app.post('/api/post', function(req, res){
    console.log('test');
    res.end();
});






/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
