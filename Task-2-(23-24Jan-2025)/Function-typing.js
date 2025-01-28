"use strict";
// Example: Function to Calculate Total Cost of an Order
// Let’s say we are calculating the total cost for an order. The order consists of items, and each item has a price and quantity. We’ll write a function that calculates the total cost.
Object.defineProperty(exports, "__esModule", { value: true });
const order = [
    { name: "Laptop", price: 45000, quantity: 1 },
    { name: "Mac mini", price: 50000, quantity: 1 },
    { name: "Monitor", price: 100000, quantity: 1 },
];
// Step 2: Write the Function to Calculate Total Cost
// We now write a function that calculates the total cost of an order. The function will:
// Accept an array of OrderItems.
// Return the total price of the order (a number).
function calculateCost(arrOfOrderItems) {
    const totalCost = arrOfOrderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalCost;
}
const result = calculateCost(order);
console.log(result);
