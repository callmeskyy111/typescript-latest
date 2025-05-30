//! TYPESCRIPT: OOP

//Defining a Class
//Constructor And Modifiers

class Person {
  //   name: string;
  //   age: number;
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! I am ${this.name}.. I'm ${this.age} years old!`);
  }
}

//Defining an object{}
const user = new Person("Skyy", 29);
const user1 = new Person("Bob", 38);

// user.greet();
// user1.greet();

//Modifiers - public (from anywhere), private (only from inside the class), protected (only from inside the class & sub-classes)

//todo: BANK-ACCOUNT
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = "Savings-Account";
  }
  showBalance() {
    console.log(`Balance is : $${this.balance}`);
  }
}

const myAccount = new BankAccount("Soumadip", 2000);
// myAccount.showBalance();
// console.log(myAccount.owner)

//! Inheritance: ParentClass -> SubClass/ChildClass

//Parent-Class
class Animal {
  constructor(public name: string) {
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving... `);
  }
}

//Sub-Classes
class Dog extends Animal {
  bark() {
    console.log("Woof Woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow Meow!");
  }
}

const myDog1 = new Dog("Snowy");
myDog1.move();
myDog1.bark();

//implements keyword
interface Automobile {
  start: void;
  stop: void;
}

// class Car implements Automobile {

//   start () {
//     console.log("Car started..");
//   }

//   stop1() {
//     console.log("Car stopped..");
//   }
// }
