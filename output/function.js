"use strict";
let myFunc = Function; // can assign by type
//myFunc =4 // error coz fun is not assign int or num 
const afunc = (a, b) => {
    return console.log(a, b);
};
afunc('aa', 'dd');
/// how to get optional value
const anotherFunc = (a, b, c) => {
    return console.log(a, b);
};
anotherFunc('aaron', 33);
const anotherFunc1 = (a, b, c = 'true') => {
    return console.log(a, b);
};
anotherFunc1('aaron', 303, 'nice');
// undefined and void are not same
/* const thisFunc =(a:number,b:number,c:string ='true'):string =>{
    return a +b // here number can not assigned  or return string
}
//  */
const thisFunc = (a, b, c) => {
    console.log(a, b);
};
thisFunc('same', 'same', 33);
