"use strict";
// any - to bypass TS checks (not recommended)
let randomValue = "Hello";
randomValue = true;
randomValue = 12;
// unknown - like 'any', but for type-safety🛡️. It requires checking before usage
let unknownVal = "World";
//💡 must check unknown type before usage
if (typeof unknownVal === "string") {
    console.log(unknownVal.toUpperCase()); //WORLD
}
// void - fx. does not return anything
function logMessage() {
    console.log("Message logged ✅");
}
logMessage();
// null
let nothing = null;
// undefined
let notAssigned = undefined;
// Type inference - automatic assumptions/guess by TS (not recommended, just like 'any')
