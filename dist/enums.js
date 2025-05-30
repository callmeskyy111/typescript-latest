"use strict";
//Enums: Numeric, String and Const enums.
//Used to define a set of named-constants.
//Reduce error, working with fixed set of values.
//By default, starts from 0.
// 1️⃣ Numeric Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Role;
(function (Role) {
    Role[Role["User"] = 2] = "User";
    Role[Role["Admin"] = 3] = "Admin";
    Role[Role["SuperAdmin"] = 4] = "SuperAdmin";
})(Role || (Role = {}));
let dir = Direction.Up;
console.log(dir); //0
const adminRole = Role.Admin;
console.log(adminRole); //3
// 2️⃣ String Enums
var Statuses;
(function (Statuses) {
    Statuses["Success"] = "SUCCESS \u2705";
    Statuses["Error"] = "ERROR \uD83D\uDD34";
    Statuses["Pending"] = "PENDING \u23F3";
})(Statuses || (Statuses = {}));
const res = Statuses.Error;
console.log(res); //ERROR 🔴
