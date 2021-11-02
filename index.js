"use strict";
// variables
var num1 = 24;
var num2;
var numOrString;
num2 = 45;
numOrString = 475;
// Tableaux
var arr = ["chien", "cheval", "poisson"];
var tableau1 = [];
var tableau2 = [];
tableau1;
tableau2.push(false, 1, 2, 3);
tableau1.push("tigre");
var zidane = {
    id: 0,
    name: "Zidane",
    jersey: 10
};
// console.log(zidane);
// Les classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
// Si le "alive" est optionnel il faut aussi rajouer le "?" dans la class
var drake = new Singer(0, "Obraham");
// console.log(drake);
// Les fonctions
var sayMyname = function (name) {
    // console.log(`Bonjour ${name}`);
};
sayMyname();
var ageDuCapitaine = function (age, size) {
    if (size) {
        console.log("Le capitaine a " + age + " ans et mesure " + size + " cm");
    }
    else {
        console.log("Le capitaine a " + age + " ans");
    }
};
// ageDuCapitaine(29, 192);
//  Tuple
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Premium"] = 1] = "Premium";
    Role[Role["Freemium"] = 2] = "Freemium";
})(Role || (Role = {}));
// Enum
var user1 = {
    name: "zizou",
    attributes: [29, "yazid"],
    role: Role.Premium
};
var user3 = {
    name: "Jessica",
    age: 27,
    job: "Chef de projet React",
    diplomes: 3
};
// console.log(user3);
// Si on veut declarer user  mais qu'in ne veut pas encore declarer les infos dans l'interface
// const user4 = <Femme>{}
// Permet de declarer un objet vide avec l'interface Femme
var user4 = {};
user4.name = "Jean";
var sayHello = function (name, age) {
    // console.log(` Hello ${name}, tu as ${age} ans`);
};
var bestFriend = function (name) { return name; };
// La ligne du dessus correspond à ça
// const bestFriend:Hello = (name)=>{
//     return name
// }
sayHello('Yves', 29);
var days = [1, 2, 3, 4, 5];
// console.log(days);
days.push(7);
var myObject = {
    title: "Alexis",
    age: 29,
    voiture: "Tesla",
    isMajeur: true,
};
// console.log(myObject);
// Les Classes
var Car = /** @class */ (function () {
    function Car(brand, model, price, _password) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this._password = _password;
    }
    Object.defineProperty(Car.prototype, "password", {
        // displayInfo() {
        //     let keys = Object.keys(this);
        //     for(let value of keys) console.log(this[value]);
        // }
        get: function () {
            return this._password;
        },
        set: function (newPassword) {
            this._password = newPassword;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var voiture = new Car("Mercedes", "C63-AMG", 11000, "test");
// console.log(voiture.password);
voiture.password = "2021";
var AdvancedUserProfile = /** @class */ (function () {
    function AdvancedUserProfile(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    return AdvancedUserProfile;
}());
var user6 = new AdvancedUserProfile("john", 12, "red");
console.log(user6.name, user6.age, user6.color);
// NodeJS--------------------------------------------
