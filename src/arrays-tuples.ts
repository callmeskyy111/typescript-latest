//Arrays in TS
let scores: number[] = [55, 28, 90, 36, 17];
let countries: string[] = ["IN", "DE", "BR", "FR"];

//Alt. way
let scores2: Array<number> = [55, 28, 90, 36, 17];

//Tuples in TS... Fixed-Length arrays[]
let student: [string, number, boolean] = ["Skyy", 29, true];
console.log(student[1]);
