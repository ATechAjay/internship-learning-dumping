"use strict";
// ### **1. Basic Type Guard: `typeof`**
// #### **Task:**
// Write a function `processInput` that:
// 1. Accepts a parameter called `input` that can be either a `string` or a `number`.
// 2. Uses the `typeof` operator to check the type of `input`.
// 3. If it's a `string`, return `"You passed a string: <value>"`.
// 4. If it's a `number`, return `"You passed a number: <value>"`.
// #### **Goal:**
// Learn how to use `typeof` for narrowing and work with union types.
function processInput(input) {
    if (typeof input === "string") {
        return `You passed a string: ${input}`;
    }
    else {
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
function useTool(input) {
    if (input instanceof Pen)
        return input.write();
    else
        return input.sketch();
}
// Created instance of Pen class.
const pen1 = new Pen();
const result2 = useTool(pen1);
console.log("Result 2:", result2);
function sendNotification(input) {
    if ("send" in input)
        input.send();
    else
        input.text();
}
sendNotification({ send: () => console.log("Send the email...") });
function isDog(input) {
    return input.bark() ? true : false;
}
function makeSound(input) {
    if (isDog(input)) {
    }
}
makeSound();
