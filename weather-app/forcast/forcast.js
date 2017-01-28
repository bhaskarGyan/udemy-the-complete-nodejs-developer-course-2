/**
 * Created by bhaskar on 28/01/17.
 */

const request = require('request');

const apiKey = 'c174d0e00b1d6267a45cd0e4b41c21ca';
let baseUrl = `https://api.darksky.net/forecast/${apiKey}`;

const getForcast = (lat,lng,callback) => {
    let forcastUrl = `${baseUrl}/${lat},${lng}`;

    request({
        url: forcastUrl,
        json: true
    }, (error, res, body) => {
        let errorMessage,results;
        if (!error && res.statusCode === 200) {
            results = {
                actualTemperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            };
        } else {
            errorMessage ='Unable to fetch weather';
        }
        callback(errorMessage,results);
    });
};

module.exports = {
    getForcast
};