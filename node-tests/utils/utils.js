/**
 * Created by bhaskar on 28/01/17.
 */
module.exports.add = (a, b) => a + b;
module.exports.getSquare = (a) => a * a;
module.exports.asyncAdd = (a, b, callback) => {
 setTimeout(()=>{
     callback(a+b);
 },1000);
};

module.exports.asyncSquare = (a,callback) => {
  setTimeout(()=>{
      callback(a*a);
  },1000);
};

module.exports.setName = (user, fullName) => {
    let name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];

    return user;
};