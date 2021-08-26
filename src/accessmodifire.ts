// access modifiers like PRIVATE,PUBLIC,READONLY USE

// IF PUBLIC IT CAN ACCESS BY ANYTHING
// IF PRIVATE ITE CAN NOT BE CHANGE OR ACCESS FROM OUTSIDE SCOPE

class Klayer{
    constructor( // if explicitly defained all access modifire
        private name:string,
        public age:number,
        readonly conuntry:string){ }

    playing(){
        console.log(`player ${this.name} is from ${this.conuntry} is at age ${this.age}`)
    }
}

const mashrafi =new Klayer('mash',33,'bangladesh')
const shakib =new Klayer('sakib',30,'bangladesh')
console.log(mashrafi.playing())
console.log(shakib.playing())

/*  //accessing the private property
shakib.name='suhel' // get an error for accessing of private property
shakib.conuntry='zimabua' // get an error for accessing a read only porperty */
 
let klayers:Klayer[]=[] //here player is a object type
klayers.push(mashrafi)
klayers.push(shakib)

console.log('player are '+ klayers.length)