// symbol - generates unique value, limited usage.
// ! Only available after ES6 ⚠️

const sym = Symbol(); //Returns a new unique Symbol value.
const sym2 = Symbol();
const sym3 = Symbol("abc");
const sym4 = Symbol("abc");
console.log(sym, sym2);
//console.log(sym3==sym4)

const dId = Symbol("id");
const obj = {
  [dId]: 100,
  name: "Skyy",
};
console.log(obj[dId]); //usage[]
