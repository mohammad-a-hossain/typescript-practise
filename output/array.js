"use strict";
const man = {
    name: 'abu',
    age: 33,
    hobbies: ['fishing', 'running', 'fighting'],
    role: [3, 'admin']
};
console.log(man.age, man.hobbies[1]);
let activites;
activites = ['suhel', 'rumel', 'aaron'];
console.log(activites[2]);
for (const hobbu of man.hobbies) {
    console.log(hobbu);
}
/* ----------- */
let ab = []; // union type
ab.push('suhle');
ab.push('jony');
ab.push(333);
console.log(ab);
let bc;
bc = ('sss');
bc = 33;
/* ----------- */
//let c:object //
let c;
c = {
    name: 'suhell', age: 33
};
