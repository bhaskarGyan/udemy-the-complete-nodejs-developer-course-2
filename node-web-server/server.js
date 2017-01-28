/**
 * Created by bhaskar on 28/01/17.
 */
'use strict';

const express = require('express');
const hbs = require('hbs');
const print = (message) => {
    console.log(message)
};
const fs = require('fs');
const port = process.env.PORT || 3000;
let app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('uppercase', text => text.toUpperCase());
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now} :${req.method} ${req.url}`;
    print(log);
    fs.appendFile('Server.log', log + '\n', (err) => {
        if (err) {
            print('Unable to read the file');
        }
    });
    next();
});

/*app.use((req,res,next) => {
 res.render('maintenance.hbs');
 });*/

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        pageContent: 'Welcome to Node js Tutorial '
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page'
    });
});
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
});
app.listen(port, () => {
    console.log(`Express listening to port ${port}`);
});