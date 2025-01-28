// let a = 53;
// let b = 47;
// b = true;

// Primitive types
let x = 453;
let y: number = 47;

let user = "hjelll";
let z: string = "Hello world";

let trueWord = true;
let p: boolean = true;

//Array
let arr = [1, 3, 4]; //number only
let arr1 = [1, 3, 4, "Ajay"]; //number | string
let arrOfObj = [1, 234, "ajay", { name: "ajay" }]; //number | string | object

let newTypeArr: number[] = [1, 2];

//tuple
let tupleVar: [string, number] = ["ajay", 23];

// enumerations -enum
enum Color {
  ADMIN = "admin",
  USER = "user",
}
console.log(Color.USER);

//Any
let aa: number; //number type
// aa = "sty"; //error

let tt; // any type

let uu: string = "user name";

//unknown
let newvar: unknown;
newvar = 23;
newvar = "ajay";

// newvar.toUpperCase(); //error

//corrected. -- using type guard.
if (newvar === "string") newvar.toUpperCase();

//void
function abc(): void {
  console.log("first");
}

function xyz(): number {
  return 23;
}

function tete(): boolean {
  return true;
}

//null
let n: null;
n = 54; //error

// But we can do it with union type or OR operator.

let nn: number | null;
nn = 55;
nn = null;
nn = "str"; //error

// let nn: number | null |string;
// nn = 55;
// nn = null;
// nn = "str"; //error

//undefined
let a: undefined;
// a=54; //error

//never
function test(): never {
  while (true) {}
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
