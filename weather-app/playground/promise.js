/**
 * Created by bhaskar on 28/01/17.
 */

const asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           if(typeof a === 'number' && typeof b === 'number'){
               resolve(a+b);
           }else {
               reject('Value should be of type number');
           }
       },2000);
    });
};

asyncAdd(4,5).then((res)=>{
    console.log(`Result of 4 + 5 is ${res}`);
    return asyncAdd(res,40);
}).then((res)=>{
    console.log(`Result from second promise is ${res}`);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});