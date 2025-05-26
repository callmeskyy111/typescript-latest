// any - to bypass TS checks (not recommended)
let randomValue: any = "Hello";
randomValue = true;
randomValue = 12;

// unknown - like 'any', but for type-safety🛡️. It requires checking before usage
let unknownVal: unknown = "World";

//💡 must check unknown type before usage
if (typeof unknownVal === "string") {
  console.log(unknownVal.toUpperCase()); //WORLD
}

// void - fx. does not return anything
function logMessage(): void {
  console.log("Message logged ✅");
}

logMessage();

// null
let nothing:null = null;

// undefined
let notAssigned:undefined = undefined