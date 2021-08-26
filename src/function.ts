let myFunc = Function // can assign by type
//myFunc =4 // error coz fun is not assign int or num 

const afunc=(a:string,b:string)=>{
      return console.log(a,b)
}
afunc('aa','dd') 

/// how to get optional value
const anotherFunc =(a:string,b:number,c?:string)=>{ // optional variable
    return console.log(a,b)

}
anotherFunc('aaron',33)
const anotherFunc1 =(a:string,b:number,c:string | number ='true')=>{ // optional variable
    return console.log(a,b)

}
anotherFunc1('aaron',303,'nice')

// undefined and void are not same
/* const thisFunc =(a:number,b:number,c:string ='true'):string =>{
    return a +b // here number can not assigned  or return string
}
//  */
const thisFunc =(a:string,b:string,c:number)=>{
    console.log(a,b)
}
thisFunc('same','same',33)