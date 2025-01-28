// ### **Task 1: Checking Vehicle Types with `is` and `as`**

// #### **Task Description:**
// 1. Define two types:
//    - `Car` with properties:
//      - `drive: () => void`
//      - `fuel: string`
//    - `Boat` with properties:
//      - `sail: () => void`
//      - `capacity: number`

// 2. Write a **custom type guard function** `isCar` that:
//    - Takes an object of type `Car | Boat`.
//    - Returns `true` if the object is a `Car`.

// 3. Write another function `operateVehicle` that:
//    - Takes a parameter of type `Car | Boat`.
//    - Uses `isCar` to narrow down the type and:
//      - Calls `drive` and logs the `fuel` for a `Car`.
//      - Calls `sail` and logs the `capacity` for a `Boat`.