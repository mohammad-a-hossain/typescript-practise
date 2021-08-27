
import { IsPlayer } from './interface';

export class Player implements IsPlayer{

    constructor(public name:string,public age:number,readonly conuntry:string){
}

    playing(){
        console.log(`player ${this.name} is from ${this.conuntry} is at age ${this.age}`)
    }
}