"use strict";
// Question 1
// Define an interface Car with the following properties:
function printCardDetails(car) {
    console.log(`The car brand is ${car.make} with ${car.model} model in ${car.year}`);
}
printCardDetails({ make: "BMW", model: "X7", year: 2025 });
function calculateArea(reactVal) {
    return reactVal.length * reactVal.width;
}
const res = calculateArea({ length: 4, width: 6 });
console.log(res);
function getManagerDetails(info) {
    console.log(`${info.id} ${info.name} ${info.department}`);
}
getManagerDetails({ id: "0001", name: "Tapas", department: "IT" });
function registerUser(userInfo) {
    console.log("Login success!: ", userInfo.username, userInfo.password);
}
registerUser({ username: "ajay", password: "pass" });
function getMidpoint(firstPointVal, secondPointVal) {
    // 0+4/2 ==>2
    // 0+6/2 ==>3
    // Expected output (2, 3)
    const firstVal = (firstPointVal.x + secondPointVal.x) / 2;
    const secondVal = (firstPointVal.y + secondPointVal.y) / 2;
    return `(${firstVal}, ${secondVal})`;
}
const output = getMidpoint({ x: 0, y: 0 }, { x: 4, y: 6 });
console.log(output);
