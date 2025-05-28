"use strict";
//todo: project2 (Build a calculator with typed-functions)
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
//Err. handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by 0 not allowed 🔴");
    }
    return a / b;
}
function exponential(base, exp = 1) {
    return Math.pow(base, exp);
}
//Fx with optional params.
function calculate(ops, a, b) {
    switch (ops) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "*":
            return multiply(a, b);
        case "^":
            return exponential(a, b);
        default:
            throw new Error("Invalid Ops. 🔴");
    }
}
console.log("Add Nums: ", calculate("+", 3, 2));
console.log("Subtract Nums: ", calculate("-", 3, 2));
console.log("Multiply Nums: ", calculate("*", 3, 2));
console.log("Divide Nums: ", calculate("/", 15, 3));
console.log("Power: ", calculate("^", 5, 2));
