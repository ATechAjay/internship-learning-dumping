### **Task 1: Checking Vehicle Types with `is` and `as`**

#### **Task Description:**
1. Define two types:
   - `Car` with properties:
     - `drive: () => void`
     - `fuel: string`
   - `Boat` with properties:
     - `sail: () => void`
     - `capacity: number`

2. Write a **custom type guard function** `isCar` that:
   - Takes an object of type `Car | Boat`.
   - Returns `true` if the object is a `Car`.

3. Write another function `operateVehicle` that:
   - Takes a parameter of type `Car | Boat`.
   - Uses `isCar` to narrow down the type and:
     - Calls `drive` and logs the `fuel` for a `Car`.
     - Calls `sail` and logs the `capacity` for a `Boat`.

---

### **Task 2: Identifying Animals with Nested Properties**

#### **Task Description:**
1. Define two types:
   - `Bird` with properties:
     - `fly: () => void`
     - `wings: { color: string }`
   - `Fish` with properties:
     - `swim: () => void`
     - `fins: { count: number }`

2. Write a **custom type guard function** `isBird` that:
   - Takes an object of type `Bird | Fish`.
   - Returns `true` if the object has the `wings` property.

3. Write another function `describeAnimal` that:
   - Takes a parameter of type `Bird | Fish`.
   - Uses `isBird` to narrow down the type and:
     - Logs the `color` of the `wings` for a `Bird`.
     - Logs the `count` of the `fins` for a `Fish`.

---

### **Expected Learning from These Tasks**
1. How to use **`as`** to access properties for type-checking.
2. How to use **`is`** to create reusable custom type guards.
3. How to apply custom type guards in practical scenarios involving unions and nested properties.

Let me know how these go or if you need hints for solving them! 🚀