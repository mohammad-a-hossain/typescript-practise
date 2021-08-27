"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.conuntry = c;
    }
    playing() {
        console.log(`player ${this.name} is from ${this.conuntry} is at age ${this.age}`);
    }
}
const masrafi = new Player('mash', 33, 'bangladesh');
const sakib = new Player('sakib', 30, 'bangladesh');
console.log(masrafi.playing());
console.log(sakib.playing());
let players = []; //here player is a object type
players.push(masrafi);
players.push(sakib);
console.log('player are ' + players.length);
