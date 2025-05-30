//todo: project5 (OOP: Vehicle Management System);

interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

class Truck implements Vehicle {
  constructor(public brand: string, public speed: number) {
    this.brand = brand;
    this.speed = speed;
  }
  move(): void {
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
