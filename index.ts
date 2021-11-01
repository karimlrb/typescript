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

// console.log(tableau2);
// console.log(tableau1);

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

// console.log(zidane);

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
// Si le "alive" est optionnel il faut aussi rajouer le "?" dans la class
const drake = new Singer(0,"Obraham");
// console.log(drake);

// Les fonctions

const sayMyname = (name?: string) => {
    // console.log(`Bonjour ${name}`);
    
}

sayMyname();

const ageDuCapitaine = (age: number|string, size?:number):void => {
    if(size){
        console.log(`Le capitaine a ${age} ans et mesure ${size} cm`);  
    }
    else {
        console.log(`Le capitaine a ${age} ans`);
    }
}

// ageDuCapitaine(29, 192);

//  Tuple
enum Role {Admin, Premium, Freemium}

interface User {
    name: string;
    attributes:[number, string];
    role : Role;
}

// Enum

const user1:User = {
    name : "zizou", 
    attributes: [29, "yazid"],
    role:Role.Premium
}

// console.log(user1);

// Heritage d'interface---------------

// Ici l'heritage d'interface sert aux objets, ne pas confondre avec les classes


interface Humain{
    name:string;
    age:number;
} 

interface Femme extends Humain{
    job:string;
    diplomes:number
}

const user3:Femme = {
    name:"Jessica",
    age:27,
    job:"Chef de projet React",
    diplomes:3
}
// console.log(user3);

// Si on veut declarer user  mais qu'in ne veut pas encore declarer les infos dans l'interface
// const user4 = <Femme>{}
// Permet de declarer un objet vide avec l'interface Femme

const user4 = <Femme> {};
user4.name = "Jean";

// console.log(user4.name);
interface Hello {
    (name:string, age?:number): void;
}

const sayHello: Hello = (name, age) => {
    console.log(` Hello ${name}, tu as ${age} ans`);
}

const bestFriend: Hello = name=>name;
// La ligne du dessus correspond à ça
// const bestFriend:Hello = (name)=>{
//     return name
// }

sayHello('Yves', 29);
console.log(`L'ami de Jean s'apelle ${bestFriend("Luc")}`);
