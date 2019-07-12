const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/0f1a41ca9c05da740f151aee8d2d3219/${latitude},${longitude}?units=si`;
  request({
    url,
    json: true
  }, (error, { body }) => {
    if (error)
      callback('Cannot connect to weather API');
    else if (body.error) {
      callback(`Error ${body.code}: ${body.error}`);
    }
    else {
      callback(undefined, `${body.daily.data[0].summary} The temperature currently is ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain`);
    }
  });
};

module.exports = forecast;