//! Object Structure Typing

function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old!`);
}

const student2 = {
  name: "Alice",
  age: 29,
};

printUser(student2); //Alice is 29 years old!

//! Type Aliases - Helpful when the same Object structure is used in multiple places.

type User = {
  id: number;
  name: string;
  age: number;
};

function showUser(user: User) {
  console.log(user.name);
}

showUser({
  id: 1,
  name: "Johnny",
  age: 33,
});

// Another one..
type Product = {
  id: number;
  productName: string;
  description: string;
  price: number;
};

const smartPhone: Product = {
  id: 2,
  productName: "Motorola G-32",
  description: "Really powerful and convenient",
  price: 16000,
};

//console.log(smartPhone.productName); //Motorola G-32

//! Optional Props. (?) - Useful with form-fields, API responses, Optional Params, etc.

type Pokemon = {
  id?: number;
  name: string;
  type: string;
  popularAttack?: string;
};

const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  type: "Electric",
};

const chikorita: Pokemon = {
    name:'Chikorita',
    type:'Grass',
    popularAttack:'Razor-Leaf'
};
