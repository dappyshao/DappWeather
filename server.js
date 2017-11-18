const express = require('express');
var request = require('request');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/weather', function (req,res) {
  var lat = req.query.lat;
  var lng = req.query.lng;
  request(`https://api.darksky.net/forecast/466e891e48956c0494959fd39b5aefaf/${lat},${lng}`, function (error, response, body) {
    console.log('error:', error);
    console.log('status code:', response && response.statusCode);
    res.send(JSON.parse(body));
  });

});

app.get('/api/location', function (req,res) {
  var address = req.query.address;
  var encodedAddress = encodeURI(address);
  var api_key = 'AIzaSyCuGtXlXKGX_c3PELIwd-6kPt8Gu2i5RNI';
  request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${api_key}`, function (error, response, body) {
    console.log('error:', error);
    console.log('status code:', response && response.statusCode);
    res.send(JSON.parse(body));
  });
});

app.get('/api/locationFirst', function (req, res) {
  var lat = req.query.lat;
  var lng = req.query.lng;
  var api_key = 'AIzaSyCuGtXlXKGX_c3PELIwd-6kPt8Gu2i5RNI';
  request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${api_key}`, function (error,response, body) {
    console.log('error:', error);
    console.log('status code:', response && response.statusCode);
    res.send(JSON.parse(body));
  });
});

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
})
