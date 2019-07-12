const request = require('request');
const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibW9oYW1lZC1tYWdpZCIsImEiOiJjanQ1NjNlcG8wMzNtNDVsZjc0aTBlenU2In0.-NnwDb3OYG5uT6YIkQmSQQ&limit=1`;
    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error)
            callback('Cannot connect to location API');
        else if (body.features.length === 0) {
            callback('Cannot find that address');
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;