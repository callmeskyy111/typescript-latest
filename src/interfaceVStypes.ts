//todo: Interfaces Vs Types - both used to describe the shape of an Obj{} ☑️

//type
type FighterJet = {
  id: number;
  name: string;
  origin: string;
};

//interface
interface CombatJet {
  id: number;
  name: string;
  origin: string;
}

//declaration merging (not allowed with TYPES)
interface Gun {
  name: string;
}

interface Gun {
  origin: string;
}

const ak47: Gun = {
  name: "ak-47",
  origin: "USSR",
};

//! 💡 Usage?
//1. Designing public-APIS - interface
//2. Simple Object{} structures - use both
//3. Define UNIONS/INTERSECTION types - types
//4. Primitives, Functions - types (strictly)
//5. Flexibility, Composition - Both

//todo: Extending Interfaces ✅

//Parent
interface Animal {
  name: string;
}

//Child
interface Dog extends Animal {
  breed: string;
}

// const myDog: Dog = {
//   name: "Romeo",
//   breed: "German-Shepherd",
// };
