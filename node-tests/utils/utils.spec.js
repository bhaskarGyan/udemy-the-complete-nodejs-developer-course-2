/**
 * Created by bhaskar on 28/01/17.
 */

const expect = require('expect');

const utils = require('./utils');

it('Should add two number',() => {
    let res = utils.add(2,3);
    expect(res).toBe(5);
    expect(res).toBeA('number');
});

it('Should return Square of a number',() => {
   let res = utils.getSquare(6);
   expect(res).toBe(36);
    expect(res).toBeA('number');
});

it('should async add two numbers',(done) => {
    utils.asyncAdd(3,4,(sum) => {
       expect(sum).toBeA('number').toBe(7);
       done();
    });
});

it('Should async square the number',(done) => {
   utils.asyncSquare(4,(square) => {
      expect(square).toBeA('number').toBe(16);
      done();
   });
});

it('Should return firstName and lastName for user',()=>{
   let user = {
       age:28,
       location:'Johannesburg, SA'
   };

   let res = utils.setName(user,'Bhaskar Vardhan');

   expect(res.firstName).toExist();
   expect(res.lastName).toExist();
   expect(res).toBeA('object');
   expect(res).toInclude({
       firstName:'Bhaskar'
   }).toInclude({
       lastName:'Vardhan'
   });
});