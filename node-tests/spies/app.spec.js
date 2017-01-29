/**
 * Created by bhaskar on 29/01/17.
 */
let expect = require('expect');
let rewire = require('rewire');
let app = rewire('./app');

describe('App Spies', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call saveUser with user object', () => {
        let email = 'vardhan.bhaskar@gmail.com';
        let password = 'password';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalled();
        expect(db.saveUser).toHaveBeenCalledWith({email, password});

    });
});