/**
 * Created by bhaskar on 28/01/17.
 */

const request = require('request');

const apiKey = 'c174d0e00b1d6267a45cd0e4b41c21ca';
let baseUrl = `https://api.darksky.net/forecast/${apiKey}`;

const getForecast = (lat, lng) => {

    return new Promise((resolve,reject)=>{

        let forecastUrl = `${baseUrl}/${lat},${lng}`;

        request({
            url: forecastUrl,
            json: true
        }, (error, res, body) => {

            if (!error && res.statusCode === 200) {
                let results = {
                    actualTemperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature
                };
                resolve(results);
            } else {
                reject('Unable to fetch weather');
            }

        });
    });

};

module.exports = {
    getForecast
};