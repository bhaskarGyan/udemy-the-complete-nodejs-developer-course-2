/**
 * Created by bhaskar on 29/01/17.
 */

let db = require('./db');

module.exports.handleSignup = (email, password) => {
    db.saveUser({email, password});
};