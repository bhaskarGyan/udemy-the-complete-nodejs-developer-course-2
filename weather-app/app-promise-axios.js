/**
 * Created by bhaskar on 28/01/17.
 */

const yargs = require('yargs');
const axios = require('axios');
const print = (message) => {
    console.log(message);
};
const argv = yargs
    .options({
        address: {
            demand: true,
            describe: 'Address to fetch weather for ',
            string: true,
            alias: 'a'
        }
    })
    .help()
    .argv;

const apiKey = 'c174d0e00b1d6267a45cd0e4b41c21ca';

let encodedUrl = encodeURIComponent(argv.address);
let geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`;

axios.get(geoCodeUrl)
    .then((results) => {
        if (results.data.status === 'ZERO_RESULTS') {
            throw new Error('Address not found');
        }
        let lat = results.data.results[0].geometry.location.lat;
        let lng = results.data.results[0].geometry.location.lng;

        print(results.data.results[0].formatted_address);

        let forecastUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

        return axios.get(forecastUrl);

    })
    .then((results) => {
    print(`Actual Temperature is ${results.data.currently.temperature} but it feels like ${results.data.currently.apparentTemperature}`);
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            print('Unable to connect to server');
        } else {
            print(e.message);
        }
    });



