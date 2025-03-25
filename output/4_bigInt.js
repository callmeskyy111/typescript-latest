"use strict";
// BigInt- Rarely Used. Number is enough, most of the times.
// Number.MAX_SAFE_INTEGER = 2^53-1
// 9007199254740991
// Beyond this limit, precision issues arise.
const bigNumber = 9007199254740991n;
const x = 1n;
const y = 2n;
console.log("Max val:", Number.MAX_SAFE_INTEGER);
console.log(bigNumber + x);
console.log(bigNumber + y);
