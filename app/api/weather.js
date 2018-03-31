// Based on Latitude & Longitude coordinates, it will return the temperature and weather summary

// Open Weather Map API usage Limits
// Calls per minute (no more than)60

// Open Weather Map API endpoint
// http://api.openweathermap.org/data/2.5/weather?lat=32&lon=74&appid=b6907d289e10d714a6e88b30761fae22

import OPEN_WEATHER_API_KEY from '../config/key';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather';

const fetchWeather = (latitude, longitude) => {
  const fetchWeatherURL = `${rootUrl}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

  return fetch(fetchWeatherURL)
    .then(res => res.json())
    .then(json => ({
      temperature: json.main.temp,
      weather: json.weather[0].description,
      city: json.name,
    }))
    .catch((err) => {
      console.log('err from fetch weather - > ', err);
      throw err;
    });
};

export default fetchWeather;
