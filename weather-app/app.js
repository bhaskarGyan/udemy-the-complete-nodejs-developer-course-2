/**
 * Created by bhaskar on 28/01/17.
 */

const yargs = require('yargs');
const forcast = require('./forcast/forcast');
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

geocode.geoCodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error)
    } else {

        console.log(`Address : ${results.address}`);
        forcast.getForcast(results.latitude,results.longitude, (errorMessage,results)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else {
                console.log(`Actual Temperature is ${results.actualTemperature} but it feels like ${results.apparentTemperature}`);
            }
        });

    }
});


