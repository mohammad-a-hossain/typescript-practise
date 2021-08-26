//signature means a mark for indevidual item

/* let myfusnk:()=> void // this function retuen null or void

let add:(x:number,y:number)=>number
 */
console.log('signature')


 // this function signature tell the declaration of a function signature what type ??
// this fun take number input and return a number option as string
 let calculation:(x:number, y:number,z:string)=> number

// now implement the signature
calculation=(a:number,b:number,c:string)=>{
    if(c === "add"){
        return a+b
    }else{
        return a-b
    }
}
// now call the function

console.log(calculation(5,6,'add'))
console.log(calculation(5,6,'minus'))