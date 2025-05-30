interface Vehicle {
    brand: string;
    speed: number;
    move(): void;
}
declare class Truck implements Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number);
    move(): void;
}
declare class ElectricTruck extends Truck {
    charge(): void;
}
declare const scania: ElectricTruck;
