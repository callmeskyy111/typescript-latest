declare function displayPokemon(pokemon: string | number): void;
type Pikachu = {
    thundershock: () => void;
};
type Chikorita = {
    agility: () => void;
};
declare function pokemonAttack(pokemon: Pikachu | Chikorita): void;
declare const pikachuAttack: Pikachu;
declare const chikoritaAttack: Chikorita;
declare class ElectricType {
    thunderShock(): void;
}
declare class WaterType {
    waterGun(): void;
}
declare function attack(pokemon: ElectricType | WaterType): void;
declare const Jolteon: ElectricType;
declare const Vaporeon: WaterType;
type Squirtle = {
    swim: () => void;
};
type Pidgey = {
    fly: () => void;
};
declare function isSquirtle(pokemon: Squirtle | Pidgey): pokemon is Squirtle;
declare function move(pokemon: Squirtle | Pidgey): void;
declare const mySquirtle: {
    swim: () => void;
};
