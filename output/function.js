"use strict";
var myFunc = Function; // can assign by type
//myFunc =4 // error coz fun is not assign int or num 
var afunc = function (a, b) {
    return console.log(a, b);
};
afunc('aa', 'dd');
/// how to get optional value
var anotherFunc = function (a, b, c) {
    return console.log(a, b);
};
anotherFunc('aaron', 33);
var anotherFunc1 = function (a, b, c) {
    if (c === void 0) { c = 'true'; }
    return console.log(a, b);
};
anotherFunc1('aaron', 303, 'nice');
// undefined and void are not same
/* const thisFunc =(a:number,b:number,c:string ='true'):string =>{
    return a +b // here number can not assigned  or return string
}
//  */
var thisFunc = function (a, b, c) {
    console.log(a, b);
};
thisFunc('same', 'same', 33);
