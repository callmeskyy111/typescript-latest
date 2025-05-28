"use strict";
//! Object Structure Typing
function printUser(user) {
    console.log(`${user.name} is ${user.age} years old!`);
}
const student2 = {
    name: "Alice",
    age: 29,
};
printUser(student2); //Alice is 29 years old!
function showUser(user) {
    console.log(user.name);
}
showUser({
    id: 1,
    name: "Johnny",
    age: 33,
});
const smartPhone = {
    id: 2,
    productName: "Motorola G-32",
    description: "Really powerful and convenient",
    price: 16000,
};
console.log(smartPhone.productName);
