// Question 1
// Define an interface Car with the following properties:

// make: a string
// model: a string
// year: a number
// Create a function printCarDetails that accepts a Car object and logs its details.

interface Car {
  make: string;
  model: string;
  year: number;
}

function printCardDetails(car: Car) {
  console.log(
    `The car brand is ${car.make} with ${car.model} model in ${car.year}`
  );
}

printCardDetails({ make: "BMW", model: "X7", year: 2025 });

// Question 2
// Create an interface Rectangle with:

// length: a number
// width: a number
// Write a function calculateArea that calculates the area of the rectangle using the interface.

interface Rectangle {
  length: number;
  width: number;
}

function calculateArea(reactVal: Rectangle): number {
  return reactVal.length * reactVal.width;
}

const res = calculateArea({ length: 4, width: 6 });
console.log(res);

// Question 3
// Extend an interface Employee with the following properties:

// id: a number
// name: a string
// Extend it to create another interface Manager with:

// department: a string
// Write a function getManagerDetails that accepts a Manager object and logs their details.

interface Employee {
  id: number | string;
  name: string;
}

interface Manager extends Employee {
  department: string;
}

function getManagerDetails(info: Manager) {
  console.log(`${info.id} ${info.name} ${info.department}`);
}

getManagerDetails({ id: "0001", name: "Tapas", department: "IT" });

// Question 4
// Create an interface User with:

// username: a string
// password: a string
// email: an optional property
// Write a function registerUser that accepts a User object and logs a success message.

interface User {
  username: string;
  password: string;
  email?: string;
}

function registerUser(userInfo: User) {
  console.log("Login success!: ", userInfo.username, userInfo.password);
}

registerUser({ username: "ajay", password: "pass" });

// Question 5
// Use the Point interface to write a function getMidpoint that calculates the midpoint of two points.

// Example input: getMidpoint({ x: 0, y: 0 }, { x: 4, y: 6 });

// Expected output: The midpoint is (2, 3)

interface Point {
  x: number;
  y: number;
}

function getMidpoint(firstPointVal: Point, secondPointVal: Point): string {
  // 0+4/2 ==>2
  // 0+6/2 ==>3
  // Expected output (2, 3)

  const firstVal = (firstPointVal.x + secondPointVal.x) / 2;
  const secondVal = (firstPointVal.y + secondPointVal.y) / 2;

  return `(${firstVal}, ${secondVal})`;
}

const output = getMidpoint({ x: 0, y: 0 }, { x: 4, y: 6 });
console.log(output);

// TASK by Syket
// Learn Interfaces:
// Create an Order interface with properties like orderId, product, quantity, and price.
// Use optional and readonly properties.

interface Order {
  readonly orderId: number; // After created, will never change it.
  product: string;
  quantity: number;
  price: number;
  rating?: number; //optional
}
