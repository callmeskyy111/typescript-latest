//todo: project4 (Build an Battle-Tank Profile using Interface);

interface Tank {
  id: number;
  name: string;
  origin: string;
}

interface T72 extends Tank {
  desc: string;
  capabilities: string[];
}

type Status = "active" | "inactive" | "retired";

const t72: T72 = {
  id: 1100,
  name: "t72-Bheeshma",
  origin: "USSR / INDIA",
  desc: "Very capable, rugged tank..",
  capabilities: ["Quick Loading", "Explosive Protection"],
};

const combatStatus: Status = "active";

console.log(t72.name)
