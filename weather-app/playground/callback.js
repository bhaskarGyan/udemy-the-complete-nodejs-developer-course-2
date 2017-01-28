/**
 * Created by bhaskar on 28/01/17.
 */
let getUser = (id, callback) => {
    let user = {
        id,
        name: 'BGV'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (user) => {
    console.log(user);
});