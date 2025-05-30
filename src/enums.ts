//Enums: Numeric, String and Const enums.
//Used to define a set of named-constants.
//Reduce error, working with fixed set of values.
//By default, starts from 0.

// 1️⃣ Numeric Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Role {
  User = 2,
  Admin,
  SuperAdmin,
}

let dir: Direction = Direction.Up;
console.log(dir); //0

const adminRole: Role = Role.Admin;
console.log(adminRole); //3

// 2️⃣ String Enums
enum Statuses {
  Success = "SUCCESS ✅",
  Error = "ERROR 🔴",
  Pending = "PENDING ⏳",
}

const res: Statuses = Statuses.Error;
console.log(res); //ERROR 🔴

// 3️⃣ Const. Enums - Can't be used with computed vals or mixed eunums
const enum Size {
  Small,
  Medium,
  Large,
}
