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
console.log(tableau2);
console.log(tableau1);
var zidane = {
    id: 0,
    name: "Zidane",
    jersey: 10
};
console.log(zidane);
// Les classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var drake = new Singer(0, "Obraham");
console.log(drake);
