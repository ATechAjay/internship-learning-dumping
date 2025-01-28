"use strict";
// Basic Level Tasks
const productItems = [
    { id: 1, name: "Book", price: 500, category: "Education" },
    { id: 2, name: "Laptop", price: 25000, category: "Tech" },
    { id: 3, name: "T-Shirt", price: 1000, category: "Clothe" },
];
function getTotalProduct(productItems) {
    return productItems.length;
}
function calcTotalPrice(productItems) {
    const totalProducts = getTotalProduct(productItems);
    console.log(totalProducts);
    const totalPrice = productItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
}
calcTotalPrice(productItems);
