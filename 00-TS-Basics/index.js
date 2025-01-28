"use strict";
// let a = 53;
// let b = 47;
// b = true;
// Primitive types
let x = 453;
let y = 47;
let user = "hjelll";
let z = "Hello world";
let trueWord = true;
let p = true;
//Array
let arr = [1, 3, 4]; //number only
let arr1 = [1, 3, 4, "Ajay"]; //number | string
let arrOfObj = [1, 234, "ajay", { name: "ajay" }]; //number | string | object
let newTypeArr = [1, 2];
//tuple
let tupleVar = ["ajay", 23];
// enumerations -enum
var Color;
(function (Color) {
    Color["ADMIN"] = "admin";
    Color["USER"] = "user";
})(Color || (Color = {}));
console.log(Color.USER);
//Any
let aa; //number type
// aa = "sty"; //error
let tt; // any type
let uu = "user name";
//unknown
let newvar;
newvar = 23;
newvar = "ajay";
// newvar.toUpperCase(); //error
//corrected. -- using type guard.
if (newvar === "string")
    newvar.toUpperCase();
//void
function abc() {
    console.log("first");
}
function xyz() {
    return 23;
}
function tete() {
    return true;
}
//null
let n;
n = 54; //error
// But we can do it with union type or OR operator.
let nn;
nn = 55;
nn = null;
nn = "str"; //error
// let nn: number | null |string;
// nn = 55;
// nn = null;
// nn = "str"; //error
//undefined
let a;
// a=54; //error
//never
function test() {
    while (true) { }
}
test();
console.log("first");
// export{}
// - number
// - string
// - boolean
// Arrays
// Tuples
// Enums
// any, unknown, void, Null, undefined, never
// Non-primitive types or reference
