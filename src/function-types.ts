// function-types i TS

//! syntax
// function functionName(paramName: type):returnType{
//      ...logic
// }

function greet(person: string): string {
  return `Hello ${person}!`;
}

// console.log(greet('Skyy'));
// console.log(greet('John'));

//! Optional And Default Params

//Opt. params. (?)
function greet2(name: string, title?: string): string {
  return title ? `Hello ${name} ${title}!` : `Hello ${name}!`;
}

//console.log(greet2("Soumadip", "Banerjee")); //Hello Soumadip Banerjee!
//console.log(greet2("Soumadip")); //Hello Soumadip!

//Default params. (=)
function greet3(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet3("Peter")); // Hello, Peter!
console.log(greet3()); // Hello, Guest!
