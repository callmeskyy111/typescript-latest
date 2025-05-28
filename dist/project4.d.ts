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
declare const t72: T72;
declare const combatStatus: Status;
