"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(voiture.password);
// console.log(voiture1);
// console.log(`La ${voiture.brand} : ${voiture.model} coûte un prix de ${voiture.price} Euro `);
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    UserProfile.prototype.sayBonjour = function () {
        console.log("Bonjour");
    };
    UserProfile.sayHolla = function () {
        console.log("Holla");
    };
    return UserProfile;
}());
var user5 = new UserProfile();
// user5.sayBonjour();
// UserProfile.sayHolla();
// Pour acceder à une fonction dans une classe je suis obligé de creer une instance(un objet)
// Puis je passe par cet objet pour appeler la fonction -> objet.maFonction()
// Si la fonction est static je peux passer directement par la fonction sans creer d'instance
// -> Class.maFonction();
// private vs protected -------------------------------------------------
//  A revoir, surtout la notion de super et la declaration pleine ou vide
var UprofileUser = /** @class */ (function () {
    function UprofileUser(name, age, _firstName) {
        this.name = name;
        this.age = age;
        this._firstName = _firstName;
    }
    ;
    return UprofileUser;
}());
;
var AdvanceUprofileUser = /** @class */ (function (_super) {
    __extends(AdvanceUprofileUser, _super);
    function AdvanceUprofileUser(name, age, _firstName, hobbies, color) {
        var _this = _super.call(this, name, age, _firstName) || this;
        _this.hobbies = hobbies;
        _this.color = color;
        return _this;
    }
    Object.defineProperty(AdvanceUprofileUser.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    return AdvanceUprofileUser;
}(UprofileUser));
var user6 = new AdvanceUprofileUser("karim", 29, "newPass", ["Lire", "Foot"], "crimson");
console.log(user6.firstName);
