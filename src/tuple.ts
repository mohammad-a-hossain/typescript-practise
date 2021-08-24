/* const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string] // tuple here
}={
    name:'abu',
    age:33,
    hobbies:['fishing','running','fighting'],
    role:[3,'admin']
} */
//console.log(person.age,person.hobbies[1])

/* person.role.push('author') */
//person.role[1] =33// error in array reference 
/* console.log(person.role[1]) */
/* --------------------------------------------------------------- */

/* ------enum----------- */
/* enum Role {ADMIN,USER,AUTHOR}

const person={
    name:'abu',
    age:33,
    hobbies:['fishing','running','fighting'],
    role:Role.ADMIN
}

if(person.role === Role.ADMIN){
    console.log('this is admin')
}
 */