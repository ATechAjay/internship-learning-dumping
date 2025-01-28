// ### **1. Basic Type Guard: `typeof`**
// #### **Task:**
// Write a function `processInput` that:
// 1. Accepts a parameter called `input` that can be either a `string` or a `number`.
// 2. Uses the `typeof` operator to check the type of `input`.
// 3. If it's a `string`, return `"You passed a string: <value>"`.
// 4. If it's a `number`, return `"You passed a number: <value>"`.

// #### **Goal:**
// Learn how to use `typeof` for narrowing and work with union types.

function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return `You passed a string: ${input}`;
  } else {
    return `You passed a number: ${input}`;
  }
}

const result1 = processInput("Hello");
console.log("Result 1:", result1);

// =======

// ### **2. Using `instanceof` for Objects**
// #### **Task:**
// Define two classes, `Pen` and `Pencil`. Each should have a unique method:
// - `Pen` has a method `write()`.
// - `Pencil` has a method `sketch()`.

// Write a function `useTool` that:
// 1. Accepts an input parameter of type `Pen | Pencil`.
// 2. Uses the `instanceof` operator to check the type of the object.
// 3. Calls the appropriate method (`write` or `sketch`) based on the type.
// #### **Goal:**
// Understand how to use `instanceof` for type narrowing with classes.

class Pen {
  write() {
    console.log("Write something with a pen!");
  }
}

class Pencil {
  sketch() {
    console.log("Sketch something with a pencil!");
  }
}

function useTool(input: Pen | Pencil): void {
  if (input instanceof Pen) return input.write();
  else return input.sketch();
}
// Created instance of Pen class.
const pen1 = new Pen();
const result2 = useTool(pen1);
console.log("Result 2:", result2);

// ### **3. Using `in` Operator**
// #### **Task:**
// Define two types:
// - `Email` with a property `send()` (method).
// - `SMS` with a property `text()` (method).

// Write a function `sendNotification` that:
// 1. Accepts an input of type `Email | SMS`.
// 2. Uses the `in` operator to check whether `send` or `text` exists on the object.
// 3. Calls the correct method based on the type.

// #### **Goal:**
// Practice using the `in` operator for type checking when working with objects.

type Email = { send: () => void };
type SMS = { text: () => void };

function sendNotification(input: Email | SMS): void {
  if ("send" in input) input.send();
  else input.text();
}

sendNotification({ send: () => console.log("Send the email...") });

// ### **4. Custom Type Guard Function**
// #### **Task:**
// Define two types:
// - `Dog` with a `bark()` method.
// - `Cat` with a `meow()` method.

// Write a **custom type guard function** `isDog` that:
// 1. Returns `true` if the passed object is a `Dog`.
// 2. Uses this custom function inside another function `makeSound` that:
//    - Calls `bark` if the object is a `Dog`.
//    - Calls `meow` if the object is a `Cat`.

// #### **Goal:**
// Learn to write reusable **custom type guard functions**.
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(input:Dog|Cat):boolean{
return input.bark()?true:false;
}

function makeSound(input:Dog|Cat){
if(isDog(input)){

}
}

makeSound()

