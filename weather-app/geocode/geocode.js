/**
 * Created by bhaskar on 28/01/17.
 */

const request = require('request');

const geoCodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    }, (error, response, body) => {
        let errorMessage, results;
        if (error) {
            errorMessage = 'Unable to connect to google servers';

        } else if (body.status === 'ZERO_RESULTS') {
            errorMessage = 'Not able to find the address';
        } else if (body.status === 'OK') {
            results = {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            }
        }

        callback(errorMessage, results);
    });
};

module.exports = {
    geoCodeAddress
};