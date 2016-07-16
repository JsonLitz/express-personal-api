// require express and other modules
var express    = require('express'),
    bodyParser = require('body-parser');
    db         = require('./models');
    app        = express();

// parse incoming urlencoded form data
// and populate the req.body object

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

var db = require('./models');

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
        weaknesses: "fire, bullets, mildly cold weather, lasers, redheads"
        }]

  }
];

/*
 * JSON API Endpoints
 */
 app.get('/api/cities', function (req, res) {
  db.City.find(function(err, cities){
    if (err) {
      return console.log("Error: ", err);
    }
    res.json(cities);
  });
});


app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/JsonLitz", // CHANGE ME
    base_url: "https://calm-fjord-77914.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
});
});

app.get('/api/profile', function api_profile(req, res){
    res.json(profile);

});







/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
