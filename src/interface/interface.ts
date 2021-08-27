console.log('this is interface page apply')

// interface defined a structure of a class



/* 
// interface Reactengular{
//     width:number;
//     length:number;
// }
// function drawRect(option:Reactengular){

//     let width = option.width;
//     let length= option.length

// }
// let threeD ={
//     width:33,
//     length:33
// }

// drawRect(threeD)
 */



export interface IsPlayer{
    name:string;
    age:number;
    conuntry:string

    playing():void
}