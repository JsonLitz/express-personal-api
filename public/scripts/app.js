console.log("Sanity Check: JS is working!");
var template;
var $citiesList;
var allCities = [];

$(document).ready(function(){

// your code
 $citiesList = $('#citiesTarget');

// compile handlebars template
var source = $('#cities-template').html();
 template = Handlebars.compile(source);

$.ajax({
  method: 'GET',
  url: '/api/cities',
  success: handleSuccess,
  error: handleError
});

$('#newCityForm').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/api/cities',
    data: $(this).serialize(),
    success: newCitySuccess,
    error: newCityError
  });
});

$citiesList.on('click', '.deleteBtn', function() {
  $.ajax({
    method: 'DELETE',
    url: '/api/cities/'+$(this).attr('data-id'),
    success: deleteCitySuccess,
    error: deleteCityError
  });
});


console.log("Sanity Check: JS is working!");


// });
function render (allCities) {
  // empty existing posts from view
  $citiesList.empty();
console.log(allCities);
  // pass `allBooks` into the template function
  var citiesHtml = template({ cities: allCities });

  // append html to the view
  $citiesList.append(citiesHtml);
}

function handleSuccess(json) {
  allCities = json;
  render(allCities);
}

function handleError(e) {
  console.log('goddammit why wont you work on refresh');
  $('#cityTarget').text('Failed to load cities, is the server working?');
}

function newCitySuccess(json) {
  $('#newCityForm').val('');
  allCities.push(json);
  render(allCities);
}

function newCityError() {
    console.log("The city was not created successfully.");
}

function deleteCitySuccess(json) {
  var city = json;
  var cityId = city._id;

  // find the city with the correct ID and remove it from our allCities array
  for(var index = 0; index < allCities.length; index++) {
    if(allCities[index]._id === cityId) {
      allCities.splice(index, 1);
      break;
    }
  }
  render(allCities);
}

function deleteCityError() {
console.log("Oops, the city wasn't deleted.");
}
});
