// Converting Latitude and Longitude into City name using Google Maps Geocoding API

// Google Maps Geocoding API usge limits
// 2,500 free requests per day
// 50 requests per second

// Sample Google Maps Geocoding API endpoint
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

const GOOGLE_GEOCODING_API_KEY = 'AIzaSyC0JLGuvazwwdpP-vQKTixzc6rUYX-PCxc';
const rootUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

const fetchCity = (latitude, longitude) => {
  const fetchCityURL = `${rootUrl}?latlng=${latitude},${longitude}&key=${GOOGLE_GEOCODING_API_KEY}`;
  //   console.log(fetchCityURL, 'otjoijtrjnr');
  return fetch(fetchCityURL)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err) => {
      console.log('err from fetch city - > ', err);
      throw err;
    });
};
export default fetchCity;
