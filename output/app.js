"use strict";
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('incorrect input');
    }
    return num1 + num2;
}
const number1 = 3.3;
const number2 = 53;
const result = add(number1, number2);
console.log(result);
