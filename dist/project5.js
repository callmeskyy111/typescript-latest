"use strict";
//todo: project5 (OOP: Vehicle Management System);
class Truck {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/hr ☑️`);
    }
}
class ElectricTruck extends Truck {
    charge() {
        console.log(`${this.brand} is charging.. ✅`);
    }
}
const scania = new ElectricTruck("Scania", 150);
scania.move();
scania.charge();
