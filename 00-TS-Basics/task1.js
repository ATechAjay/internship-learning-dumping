"use strict";
const cart = [
    ["Apple", 10],
    ["Banana", 5],
    ["Orange", 8],
];
function calcTotal(cart) {
    let total = 0;
    cart.forEach((item) => {
        total += item[1];
    });
    return total;
}
const result = calcTotal(cart);
console.log(result);
