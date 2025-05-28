"use strict";
// function-types i TS
//! syntax
// function functionName(paramName: type):returnType{
//      ...logic
// }
function greet(person) {
    return `Hello ${person}!`;
}
// console.log(greet('Skyy'));
// console.log(greet('John'));
//! Optional And Default Params
//Opt. params. (?)
function greet2(name, title) {
    return title ? `Hello ${name} ${title}!` : `Hello ${name}!`;
}
//console.log(greet2("Soumadip", "Banerjee")); //Hello Soumadip Banerjee!
//console.log(greet2("Soumadip")); //Hello Soumadip!
//Default params. (=)
function greet3(name = "Guest") {
    return `Hello, ${name}!`;
}
// console.log(greet3("Peter")); // Hello, Peter!
// console.log(greet3()); // Hello, Guest!
//! Return Types
// void - if it doesn't return anything
//never type example (it never finishes..)
function throwErr() {
    throw new Error("Something Went Wrong! 🔴");
}
//! Arrow functions
const addTwoNums = (a, b) => a + b;
//console.log(addTwoNums(3,2)); //5
