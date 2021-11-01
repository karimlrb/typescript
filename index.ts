// variables
let num1 = 24;
let num2:number;
let numOrString: number | string;

num2 = 45;

numOrString = 475;

// Tableaux

let arr = ["chien", "cheval", "poisson"];

let tableau1: string[] = [];
let tableau2: (number | boolean) [] = [];

tableau1

tableau2.push(false,1,2,3);
tableau1.push("tigre");

console.log(tableau2);
console.log(tableau1);

// Objets

interface Player{
    id: number,
    name: string,
    jersey?: number
}

const zidane:Player = {
    id: 0,
    name: "Zidane",
    jersey: 10
};

console.log(zidane);

// Les classes

class Singer {
    id:number;
    name: string;
    alive?: boolean;

    constructor(id:number, name:string, alive?:boolean) {
        this.id =id;
        this.name = name;
        this.alive = alive;
    }
}

const drake = new Singer(0,"Obraham");
console.log(drake);
