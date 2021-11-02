"use strict";
// Ici un exemple de namespace, apparement c'esr déconseillé mais faut savoir que ca existe
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiplication = exports.substraction = exports.addition = void 0;
// namespace MathFunctions {
//     export function addition (x:number, y:number){
//         return x + y;
//     }
//     export function substraction(x:number, y:number){
//         return x - y;
//     }
//     export function multiplication(x:number, y:number){
//         return x * y;
//     }
//     export function division(x:number, y:number){
//         return x / y;
//     }
// }
//  Les modules ----------------------------------------------------
function addition(x, y) {
    return x + y;
}
exports.addition = addition;
function substraction(x, y) {
    return x - y;
}
exports.substraction = substraction;
function multiplication(x, y) {
    return x * y;
}
exports.multiplication = multiplication;
function division(x, y) {
    return x / y;
}
exports.division = division;
