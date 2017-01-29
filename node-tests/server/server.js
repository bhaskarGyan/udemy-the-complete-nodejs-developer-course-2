/**
 * Created by bhaskar on 28/01/17.
 */
const express = require('express');

let app = express();

app.get('/',(req,res) => {
   res.status(404).send({
       errorMessage:'Page not found.'
   })
});

app.listen(3000);

module.exports.app = app;