type FighterJet = {
    id: number;
    name: string;
    origin: string;
};
interface CombatJet {
    id: number;
    name: string;
    origin: string;
}
interface Gun {
    name: string;
}
interface Gun {
    origin: string;
}
declare const ak47: Gun;
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
