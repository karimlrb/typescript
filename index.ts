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
    // console.log(` Hello ${name}, tu as ${age} ans`);
}

const bestFriend: Hello = name=>name;
// La ligne du dessus correspond à ça
// const bestFriend:Hello = (name)=>{
//     return name
// }

sayHello('Yves', 29);
// console.log(`L'ami de Jean s'apelle ${bestFriend("Luc ")}`);

interface Repertory extends Array<number> {
    [index:number]:number;
}

const days: Repertory = [1,2,3,4,5];

// console.log(days);

days.push(7);

// console.log(days);

// Pour rendre obligatoire une fonction dans une interface
// Mettre la fonction entre {}
// => maFonction: {(param1:string):void }
// ////////////////////////// Finalement Ca marche pas attention

interface Object {
    [index:string]:any;
    Hola: {(name:string):void};
}

const myObject: Object = {
    title:"Alexis",
    age:29,
    voiture:"Tesla",
    isMajeur:true,
    
}

// console.log(myObject);

// Les Classes

class Car{
    public brand:string;
    public model:string;
    public price:number;
    private _password:string;

    constructor(brand:string, model:string, price:number, _password:string){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this._password = _password;
    }

    // displayInfo() {
    //     let keys = Object.keys(this);
    //     for(let value of keys) console.log(this[value]);
    // }

    get password():string {
        return this._password;
    }

    set password(newPassword:string) {
         this._password= newPassword;
    }

}

const voiture = new Car("Mercedes", "C63-AMG", 11000, "test");

// console.log(voiture.password);

voiture.password = "2021";

// console.log(voiture.password);

// console.log(voiture1);

// console.log(`La ${voiture.brand} : ${voiture.model} coûte un prix de ${voiture.price} Euro `);

// class UserProfile {

//     sayBonjour() {
//         console.log("Bonjour");     
//     }

//     static sayHolla(){
//         console.log("Holla");
//     }
// }

// const user5 = new UserProfile();

// user5.sayBonjour();
// UserProfile.sayHolla();



// Pour acceder à une fonction dans une classe je suis obligé de creer une instance(un objet)
// Puis je passe par cet objet pour appeler la fonction -> objet.maFonction()
// Si la fonction est static je peux passer directement par la fonction sans creer d'instance
// -> Class.maFonction();

// private vs protected -------------------------------------------------
//  A revoir, surtout la notion de super et la declaration pleine ou vide

// class UprofileUser {

//     constructor(public name:string,public age:number, protected _firstName:string){};

    // get firstName(){
    //     return this._firstName;
    // }
// };

// class AdvanceUprofileUser extends UprofileUser {

//     constructor( name:string, age:number , _firstName:string,public hobbies:string[],public color:string){
//        super(name,age,_firstName);
//     }
//      get firstName(){
//         return this._firstName;
//     }
// }

// const user6 = new AdvanceUprofileUser("karim", 29, "newPass", ["Lire", "Foot"],"crimson");

// console.log(user6.firstName);

// Nouvelle facon d'ecire les classes
// Grace au mot public dans les constructors on peut ->
// Supprimer les déclas de propriétées dans la classe
// Mais aussi le this dans le constructor 

// class UserProfile{
//     // public name:string;
//     // public age:number;
//     constructor(public name:string, public age:number){
//     }
// }

// class AdvancedUserProfile extends UserProfile {
//     // hobbies:string[];
//     // color:string;

//     constructor(name:string,age:number,public hobbies:string[],public color:string){
//         super(name,age)
//         // this.hobbies = hobbies;
//         // this.color = color;
//     }
// }

// const user6 = new AdvancedUserProfile("Kiko", 30, ["montres", "pêche"],"blue");

// console.log(user6.name, user6.hobbies);

// Remplacement de la classe parent par une interface

interface UserProfile{
     name:string;
     age:number;
}

class AdvancedUserProfile implements UserProfile {
    
    constructor(public name:string,public age:number,public color:string){
         
    }
}

const user6 = new AdvancedUserProfile("john", 12,"red");

console.log(user6.name, user6.age, user6.color );

// NodeJS--------------------------------------------

