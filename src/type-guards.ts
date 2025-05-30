// type-guards: typeof, in operator, instanceof etc.

//1️⃣ Typeof - mainly for Primitive Data types
function displayPokemon(pokemon: string | number) {
  if (typeof pokemon === "string") {
    console.log(`Your Pokemon is ${pokemon.toUpperCase()}!`);
  } else {
    console.log(`Your Pokemon's No. is ${pokemon.toFixed()}`);
  }
}

displayPokemon("Raichu");
displayPokemon(26);

//2️⃣ In operator - Mainly for checking object-properties
type Pikachu = {
  thundershock: () => void;
};

type Chikorita = {
  agility: () => void;
};

function pokemonAttack(pokemon: Pikachu | Chikorita) {
  if ("thundershock" in pokemon) {
    pokemon.thundershock();
  } else {
    pokemon.agility();
  }
}

const pikachuAttack: Pikachu = {
  thundershock: () => {
    console.log(`Pikachoooooooooooo!`);
  },
};

const chikoritaAttack: Chikorita = {
  agility: () => {
    console.log(`Chiko Chiko!`);
  },
};

pokemonAttack(pikachuAttack);
pokemonAttack(chikoritaAttack);

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

function attack(pokemon: ElectricType | WaterType) {
  if (pokemon instanceof ElectricType) {
    pokemon.thunderShock();
  } else {
    pokemon.waterGun();
  }
}

const Jolteon: ElectricType = new ElectricType();
const Vaporeon: WaterType = new WaterType();

attack(Jolteon);
attack(Vaporeon);
