declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
    greet(): void;
}
declare const user: Person;
declare const user1: Person;
declare class BankAccount {
    owner: string;
    private balance;
    protected accountType: string;
    constructor(owner: string, balance: number);
    showBalance(): void;
}
declare const myAccount: BankAccount;
declare class Animal {
    name: string;
    constructor(name: string);
    move(): void;
}
declare class Dog extends Animal {
    bark(): void;
}
declare class Cat extends Animal {
    meow(): void;
}
declare const myDog1: Dog;
interface Automobile {
    start: void;
    stop: void;
}
