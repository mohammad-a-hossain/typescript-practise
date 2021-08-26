const man=
   {
    name:'abu',
    age:33,
    hobbies:['fishing','running','fighting'],
    role:[3,'admin']
}
console.log(man.age,man.hobbies[1])

let activites:string[]
activites=['suhel','rumel','aaron']
console.log(activites[2])

for(const hobbu of man.hobbies){
    console.log(hobbu)
}
/* ----------- */

let ab :(string | number)[] =[] // union type

ab.push('suhle')
ab.push('jony')
ab.push(333)

console.log(ab)
let bc : string | number
bc=('sss')
bc=33


/* ----------- */

//let c:object //
let c:{name:string,age:number}
c={
    name:'suhell',age:33
}


