declare function printUser(user: {
    name: string;
    age: number;
}): void;
declare const student2: {
    name: string;
    age: number;
};
type User = {
    id: number;
    name: string;
    age: number;
};
declare function showUser(user: User): void;
type Product = {
    id: number;
    productName: string;
    description: string;
    price: number;
};
declare const smartPhone: Product;
type Pokemon = {
    id?: number;
    name: string;
    type: string;
    popularAttack?: string;
};
declare const pikachu: Pokemon;
declare const chikorita: Pokemon;
