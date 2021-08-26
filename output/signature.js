"use strict";
//signature means a mark for indevidual item
/* let myfusnk:()=> void // this function retuen null or void

let add:(x:number,y:number)=>number
 */
console.log('signature');
// this function signature tell the declaration of a function signature what type ??
// this fun take number input and return a number option as string
var calculation;
// now implement the signature
calculation = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
// now call the function
console.log(calculation(5, 6, 'add'));
console.log(calculation(5, 6, 'minus'));
