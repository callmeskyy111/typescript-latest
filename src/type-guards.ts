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

//4️⃣ Custom Type Guard/Checker
type Squirtle = {
  swim: () => void;
};

type Pidgey = {
  fly: () => void;
};

function isSquirtle(pokemon: Squirtle | Pidgey): pokemon is Squirtle {
  return (pokemon as Squirtle).swim !== undefined;
}

function move(pokemon: Squirtle | Pidgey) {
  if (isSquirtle(pokemon)) {
    pokemon.swim();
  } else {
    pokemon.fly();
  }
}

const mySquirtle = {
  swim: () => console.log(`Squirtle is swimming..`),
};

move(mySquirtle); //Squirtle is swimming..
