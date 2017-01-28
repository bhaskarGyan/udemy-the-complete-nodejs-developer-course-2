/**
 * Created by bhaskar on 28/01/17.
 */

const request = require('request');

const geoCodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {

            if (error) {
                reject('Unable to connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Not able to find the address')
            } else if (body.status === 'OK') {
             let results = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                };
                resolve(results);
            }


        });
    });

};

module.exports = {
    geoCodeAddress
};