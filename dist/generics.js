"use strict";
// Generics - Flexible Data-Types
function logStr(data) {
    console.log(data);
}
function logNum(data) {
    console.log(data);
}
//Now, reusable modified function using GENERICs
function logData(data) {
    console.log(data);
}
logStr("Hello");
logNum(23);
logData(29);
logData("Some Str..");
logData(true);
logData({ name: "Skyy", age: 29 });
const userResponse = {
    success: true,
    data: { name: "Api Resp 201!" },
};
const numberResp = {
    success: true,
    data: 42,
};
// Constraints: Limit the data-type that can be passed to the GENERIC fx.
function printLength(item) {
    console.log(item.length);
}
printLength("hello");
printLength(["1", "2", "3", "4"]);
function getId(item) {
    return item.id;
}
console.log(getId({ id: 223, title: "Product 1" }));
