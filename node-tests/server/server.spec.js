/**
 * Created by bhaskar on 28/01/17.
 */
const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');
it('Should return Hello world',(done) => {
   request(app)
       .get('/')
       .expect(404)
       .expect({
           errorMessage:'Page not found.'
       })
       .expect((res)=>{
        expect(res.body).toInclude({
            errorMessage:'Page not found.'
        })
       })
       .end(done)
});