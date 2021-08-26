"use strict";
var man = {
    name: 'abu',
    age: 33,
    hobbies: ['fishing', 'running', 'fighting'],
    role: [3, 'admin']
};
console.log(man.age, man.hobbies[1]);
var activites;
activites = ['suhel', 'rumel', 'aaron'];
console.log(activites[2]);
for (var _i = 0, _a = man.hobbies; _i < _a.length; _i++) {
    var hobbu = _a[_i];
    console.log(hobbu);
}
/* ----------- */
var ab = []; // union type
ab.push('suhle');
ab.push('jony');
ab.push(333);
console.log(ab);
var bc;
bc = ('sss');
bc = 33;
/* ----------- */
//let c:object //
var c;
c = {
    name: 'suhell', age: 33
};
