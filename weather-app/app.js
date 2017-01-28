/**
 * Created by bhaskar on 28/01/17.
 */

const yargs = require('yargs');
const forecast = require('./forecast/forecast');
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
const geocode = require('./geocode/geocode');

geocode.geoCodeAddress(argv.address).then((results) => {
    console.log(`Address : ${results.address}`);
    return forecast.getForecast(results.latitude, results.longitude);
}).then((results) => {
    console.log(`Actual Temperature is ${results.actualTemperature} but it feels like ${results.apparentTemperature}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});


