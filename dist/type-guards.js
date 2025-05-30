"use strict";
// type-guards: typeof, in operator, instanceof etc.
//1️⃣ Typeof - mainly for Primitive Data types
function displayPokemon(pokemon) {
    if (typeof pokemon === "string") {
        console.log(`Your Pokemon is ${pokemon.toUpperCase()}!`);
    }
    else {
        console.log(`Your Pokemon's No. is ${pokemon.toFixed()}`);
    }
}
function pokemonAttack(pokemon) {
    if ("thundershock" in pokemon) {
        pokemon.thundershock();
    }
    else {
        pokemon.agility();
    }
}
const pikachuAttack = {
    thundershock: () => {
        console.log(`Pikachoooooooooooo!`);
    },
};
const chikoritaAttack = {
    agility: () => {
        console.log(`Chiko Chiko!`);
    },
};
// pokemonAttack(pikachuAttack);
// pokemonAttack(chikoritaAttack);
//3️⃣ InstanceOf - Mainly for CLASSES (OOP)
class ElectricType {
    thunderShock() {
        console.log(`Thunder-Attack!`);
    }
}
class WaterType {
    waterGun() {
        console.log(`Water-Gun!`);
    }
}
function attack(pokemon) {
    if (pokemon instanceof ElectricType) {
        pokemon.thunderShock();
    }
    else {
        pokemon.waterGun();
    }
}
const Jolteon = new ElectricType();
const Vaporeon = new WaterType();
attack(Jolteon);
attack(Vaporeon);
