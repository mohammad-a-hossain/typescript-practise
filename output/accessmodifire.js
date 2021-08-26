"use strict";
// access modifiers like PRIVATE,PUBLIC,READONLY USE
// IF PUBLIC IT CAN ACCESS BY ANYTHING
// IF PRIVATE ITE CAN NOT BE CHANGE OR ACCESS FROM OUTSIDE SCOPE
var Klayer = /** @class */ (function () {
    function Klayer(name, age, conuntry) {
        this.name = name;
        this.age = age;
        this.conuntry = conuntry;
    }
    Klayer.prototype.playing = function () {
        console.log("player " + this.name + " is from " + this.conuntry + " is at age " + this.age);
    };
    return Klayer;
}());
var mashrafi = new Klayer('mash', 33, 'bangladesh');
var shakib = new Klayer('sakib', 30, 'bangladesh');
console.log(mashrafi.playing());
console.log(shakib.playing());
/*  //accessing the private property
shakib.name='suhel' // get an error for accessing of private property
shakib.conuntry='zimabua' // get an error for accessing a read only porperty */
var klayers = []; //here player is a object type
klayers.push(mashrafi);
klayers.push(shakib);
console.log('player are ' + klayers.length);
