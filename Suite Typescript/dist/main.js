"use strict";
// Ici on import le namespace du fichier math.ts, à noter qu'on a remplacer le module "comonjs" par "system" dans le tsconfigjson
// /// <reference path = "math.ts" />
// console.log(MathFunctions.addition(6,6));
// console.log(MathFunctions.multiplication(6,6));
// on importe toutes les fonctions du fichier math.ts
// import * as MathFunctions from "./math";
// console.log(MathFunctions.addition(78,12));
// console.log(MathFunctions.multiplication(8,12));
// console.log(MathFunctions.division(100,50));
// On importe juste la fonction multiplication
// import {multiplication} from "./math"
// console.log(multiplication(12,12));
// Les generics
// function identity<T> (data: T){
//     return data
// }
// console.log(identity<number>(4));
// console.log(identity<number>(78));
// // Ici on a myArray de type array qui doit contenir que des nombres
// const myArray: Array<number> = [1,2,3,"allo"];
// console.log(myArray);
// class MathFunctions<T> {
//     add : (x:T, y:T) => T;
//     sub: (x:T,y:T) => T;
// }
// let myTotal = new MathFunctions<number>();
