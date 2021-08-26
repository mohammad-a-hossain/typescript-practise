"use strict";
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.conuntry = c;
    }
    Player.prototype.playing = function () {
        console.log("player " + this.name + " is from " + this.conuntry + " is at age " + this.age);
    };
    return Player;
}());
var masrafi = new Player('mash', 33, 'bangladesh');
var sakib = new Player('sakib', 30, 'bangladesh');
console.log(masrafi.playing());
console.log(sakib.playing());
var players = []; //here player is a object type
players.push(masrafi);
players.push(sakib);
console.log('player are ' + players.length);
