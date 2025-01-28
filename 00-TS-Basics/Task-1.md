Task 1:

# Setup TypeScript:

Install TypeScript and configure tsconfig.json with strict mode enabled.

# Practice Core Types:

Define variables with number, string, boolean, array, and tuple.

# Work with union and literal types.

Example: Create a function that calculates the total cost of items in a shopping cart, where each item is represented as a tuple: [name: string, price: number].

```
You need to create a function that calculates the total cost of items in a shopping cart.

Each item in the cart will be stored as a tuple (a fixed-size list where the order and types of elements are important).
For each item, the tuple will have two values:
The name of the item as a string (e.g., "Apple").
The price of the item as a number (e.g., 10.99).
Your function should add up the prices of all items in the cart and return the total.

Would you like to proceed with hints or the solution? 😊
```

```ts

const items:[string, number]=[["Apple", 43],["Apple", 43],["Apple", 43]]

function totalCost(){}

totalCost([item:string, price:number])

```

# Real-World Scenario:

Create a program that processes a list of employee records.
Each employee has id, name, age, and optional department.
Write a function to filter employees by age and group them by department.

```ts
interface Employee {
  id: number | string;
  name: string;
  age: number;
  department?: string;
}

function filterEmp(emp: Employee) {}

filterEmp();
```
