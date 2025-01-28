Type Guards are a way to `narrow down` the type of a variable or parameter within a specific block of code. This ensures that your code works with the correct type and avoids runtime errors.

TypeScript uses `type narrowing` to determine the type of a variable based on certain checks. Type Guards are like `"if statements"` but with a focus on ensuring the type is what you expect it to be.

# Why Use Type Guards?

1. `Improves Type Safety`: Ensures you don't accidentally call a method or property that doesn't exist on a type.
2. `Better Code Readability`: Makes your code more predictable and organized.
3. `Prevents Runtime Errors`: Helps catch issues during compile time instead of runtime.

# `typeof` Type Guard

The `typeof` operator is a built-in way to check primitive types like `string`, `number`, `boolean`, etc.

```typescript
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("The ID is a string:", id.toUpperCase()); // Narrowed to string
  } else {
    console.log("The ID is a number:", id.toFixed(2)); // Narrowed to number
  }
}
```

# `instanceof` Type Guard

The `instanceof` operator checks if an object is an `instance of a specific class`.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark(); // Narrowed to Dog
  } else {
    animal.meow(); // Narrowed to Cat
  }
}

const myDog = new Dog();
speak(myDog); // Output: Woof!
```

# Custom Type Guard Function


Custom Type Guards allow you to define your own logic to check what type a variable is. They are useful when the built-in type guards (typeof, instanceof, or in) don’t work for your specific scenario.


```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined; // Checks if `swim` exists
}

function move(animal: Fish | Bird): void {
  if (isFish(animal)) {
    animal.swim(); // Narrowed to Fish
  } else {
    animal.fly(); // Narrowed to Bird
  }
}

const myFish: Fish = { swim: () => console.log("Swimming!") };
move(myFish); // Output: Swimming!
```

# Type Guards with `in` Operator

The `in` operator checks for the `existence of a property on an object`.

```typescript
type Car = { drive: () => void };
type Boat = { sail: () => void };

function operate(vehicle: Car | Boat): void {
  if ("drive" in vehicle) {
    vehicle.drive(); // Narrowed to Car
  } else {
    vehicle.sail(); // Narrowed to Boat
  }
}

const myBoat: Boat = { sail: () => console.log("Sailing!") };
operate(myBoat); // Output: Sailing!
```

# Advanced Discriminated Unions

Discriminated unions rely on a shared property, usually a `type` field, to determine the type.

```typescript
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; length: number; width: number };

function calculateArea(shape: Circle | Rectangle): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius  2; // Narrowed to Circle
  } else {
    return shape.length * shape.width; // Narrowed to Rectangle
  }
}

const myCircle: Circle = { kind: "circle", radius: 5 };
console.log(calculateArea(myCircle)); // Output: 78.53981633974483
```


===

Got it! Let’s focus on **`param is Type`**, the core concept of **Custom Type Guards**, and explain it in **simple terms** with detailed examples.

---

### **What Does `param is Type` Mean?**

In TypeScript, **`param is Type`** is a way to tell TypeScript:
- "If this function returns `true`, the `param` is definitely of the `Type` I mentioned."

It’s like giving a **guarantee** to TypeScript that the `param` belongs to the specified type.

---

### **Why Do We Use `param is Type`?**

TypeScript doesn’t always know the exact type of a variable when you have a union type (e.g., `string | number`).  
- If you want to check the type yourself (e.g., "Is this a Fish or a Bird?"), you can write a **custom function** to do it.  
- **`param is Type`** makes that function a **Type Guard**.

---

### **Breaking It Down With an Example**

Let’s consider two types, `Fish` and `Bird`.

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };
```

Now, let’s create a custom function to check if a given `animal` is a `Fish`.

---

#### **Step-by-Step Explanation**

1. **Write the Function Name:**
   ```typescript
   function isFish(animal: Fish | Bird): animal is Fish {
   }
   ```
   - `animal` is the parameter. It can be either a `Fish` or a `Bird` (union type).
   - `animal is Fish` is the **return type** of the function.  
     - This tells TypeScript: "If I return `true`, the `animal` is definitely a `Fish`."

---

2. **Write the Logic Inside the Function:**
   ```typescript
   function isFish(animal: Fish | Bird): animal is Fish {
     return (animal as Fish).swim !== undefined;
   }
   ```
   - `(animal as Fish)` temporarily treats `animal` as a `Fish`.  
     - This is necessary because TypeScript doesn’t know the exact type yet.
   - `.swim !== undefined` checks if the `swim` property exists, which only a `Fish` has.

---

3. **Use the Function:**

Let’s use this function in real code:

```typescript
function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // Now TypeScript knows `animal` is a Fish here!
  } else {
    animal.fly(); // Now TypeScript knows `animal` is a Bird here!
  }
}

const fish: Fish = { swim: () => console.log("Swimming!") };
move(fish); // Output: Swimming!
```

---

### **Why Is This Useful?**

- Without a **Type Guard**, TypeScript wouldn’t know whether `animal` is a `Fish` or a `Bird`.
- With the **`isFish` function**, you give TypeScript a **safe way** to narrow the type.

---

### **Key Takeaways**
1. **`param is Type`** is a way to tell TypeScript that your custom function checks for a specific type.
2. The function should return `true` when the type matches.
3. This enables TypeScript to automatically narrow down the type when used in an `if` condition.

---

### **Advanced Example: Vehicles**

Here’s a slightly more complex example:

#### Define the Types:
```typescript
type Car = { drive: () => void; fuel: string };
type Boat = { sail: () => void; capacity: number };
```

#### Custom Type Guard Function:
```typescript
function isCar(vehicle: Car | Boat): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}
```

#### Use It:
```typescript
function operate(vehicle: Car | Boat) {
  if (isCar(vehicle)) {
    console.log(`This is a car that uses ${vehicle.fuel}.`);
    vehicle.drive(); // Safe to call `drive` here
  } else {
    console.log(`This is a boat that holds ${vehicle.capacity} people.`);
    vehicle.sail(); // Safe to call `sail` here
  }
}

const myCar: Car = { drive: () => console.log("Driving!"), fuel: "Petrol" };
operate(myCar); // Output: This is a car that uses Petrol. Driving!
```




Let’s go step by step and make these topics as simple as possible.

---

### **1. Custom Type Guard Functions**

Custom Type Guards allow you to define your own logic to check what type a variable is. They are useful when the built-in type guards (`typeof`, `instanceof`, or `in`) don’t work for your specific scenario.

---

#### **What Is a Type Guard Function?**

A function becomes a **Type Guard** if it returns a value of the form:
```typescript
param is Type
```
This tells TypeScript:
- **Inside this function:** Check the condition I wrote.
- **If the function returns `true`:** Narrow the type to the specific type I mentioned.

---

#### **Example: Fish and Bird**

Here’s how to use a **Custom Type Guard Function** with two types:

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
```

**What’s Happening Here?**
1. `animal` is the input that could be **Fish** or **Bird**.
2. `(animal as Fish)` is a **type assertion**, temporarily treating `animal` as a `Fish`.
3. `swim !== undefined`: Checks if the `swim` property exists.
4. **Return Type:** `animal is Fish` tells TypeScript:
   - If the function returns `true`, the `animal` must be a `Fish`.

---

#### **Using This Function**

```typescript
function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // Narrowed to Fish
  } else {
    animal.fly(); // Narrowed to Bird
  }
}

const fish: Fish = { swim: () => console.log("Swimming!") };
move(fish); // Output: Swimming!
```

**Why Use This?**
- You can define clear, reusable logic for distinguishing types.
- It’s safer and cleaner than using `as` all over your code.

---

---

### **2. Advanced Discriminated Unions**

Discriminated Unions are a technique used to work with multiple types that share a **common property** (a discriminator). TypeScript uses this property to narrow down the type automatically.

---

#### **What Is a Discriminator?**

A **discriminator** is a unique property present in all the types of a union. It helps TypeScript figure out which type you are dealing with.

#### **Example: Shapes**

Let’s consider two shapes: `Circle` and `Rectangle`.

```typescript
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; length: number; width: number };

type Shape = Circle | Rectangle; // Union of both types
```

- **Discriminator**: The `kind` property is the same in both types but has different values (`"circle"` or `"rectangle"`).

---

#### **How Does TypeScript Use It?**

If you check the `kind` property, TypeScript can **narrow the type**.

```typescript
function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2; // Type narrowed to Circle
  } else {
    return shape.length * shape.width; // Type narrowed to Rectangle
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
console.log(calculateArea(circle)); // Output: 78.53981633974483
```

**Why Use This?**
- Makes code simpler and more readable.
- Automatically narrows the type without extra logic.
- Reduces the chances of runtime errors.

---

#### **Why Is It "Advanced"?**

Discriminated unions become advanced when:
1. You have more than two types.
2. You use them with complex nested objects.

For example:
```typescript
type Triangle = { kind: "triangle"; base: number; height: number };

type Shape = Circle | Rectangle | Triangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.length * shape.width;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

const triangle: Triangle = { kind: "triangle", base: 10, height: 5 };
console.log(calculateArea(triangle)); // Output: 25
```

