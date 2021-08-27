export class Player {
    constructor(name, age, conuntry) {
        this.name = name;
        this.age = age;
        this.conuntry = conuntry;
    }
    playing() {
        console.log(`player ${this.name} is from ${this.conuntry} is at age ${this.age}`);
    }
}
