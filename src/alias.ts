
//alias using for assing a type


/* const userDetails =(id:string | number,user:{name:string,age:number})=>{
    console.log(`user name ${user.name}, id ${id}`)
}
 */

 // can assign type before initialize in a function

 type stringorNum= string | number
 type usertype= {name:string,age:number}

const userDetails =(id:stringorNum,user:usertype)=>{
    console.log(`user name ${user.name}, id ${id}`)
}
    