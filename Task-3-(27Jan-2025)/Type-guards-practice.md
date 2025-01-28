

### **1. Basic Type Guard: `typeof`**
#### **Task:**
Write a function `processInput` that:
1. Accepts a parameter called `input` that can be either a `string` or a `number`.
2. Uses the `typeof` operator to check the type of `input`.
3. If it's a `string`, return `"You passed a string: <value>"`.
4. If it's a `number`, return `"You passed a number: <value>"`.

#### **Goal:**
Learn how to use `typeof` for narrowing and work with union types.

---

### **2. Using `instanceof` for Objects**
#### **Task:**
Define two classes, `Pen` and `Pencil`. Each should have a unique method:
- `Pen` has a method `write()`.
- `Pencil` has a method `sketch()`.

Write a function `useTool` that:
1. Accepts an input parameter of type `Pen | Pencil`.
2. Uses the `instanceof` operator to check the type of the object.
3. Calls the appropriate method (`write` or `sketch`) based on the type.

#### **Goal:**
Understand how to use `instanceof` for type narrowing with classes.

---

### **3. Using `in` Operator**
#### **Task:**
Define two types:
- `Email` with a property `send()` (method).
- `SMS` with a property `text()` (method).

Write a function `sendNotification` that:
1. Accepts an input of type `Email | SMS`.
2. Uses the `in` operator to check whether `send` or `text` exists on the object.
3. Calls the correct method based on the type.

#### **Goal:**
Practice using the `in` operator for type checking when working with objects.

---

### **4. Custom Type Guard Function**
#### **Task:**
Define two types:
- `Dog` with a `bark()` method.
- `Cat` with a `meow()` method.

Write a **custom type guard function** `isDog` that:
1. Returns `true` if the passed object is a `Dog`.
2. Uses this custom function inside another function `makeSound` that:
   - Calls `bark` if the object is a `Dog`.
   - Calls `meow` if the object is a `Cat`.

#### **Goal:**
Learn to write reusable **custom type guard functions**.

---

### **5. Combining Type Guards: Nested Objects**
#### **Task:**
Define two types:
- `Admin` with a property `role: "admin"` and a nested `permissions: { level: string }`.
- `User` with a property `role: "user"` and a nested `profile: { age: number }`.

Write a function `getDetails` that:
1. Accepts an input of type `Admin | User`.
2. Uses:
   - The `role` property to determine if it’s an `Admin` or a `User`.
   - Checks the nested object (`permissions` for `Admin` or `profile` for `User`).
3. Logs the relevant details:
   - For Admin: `Role: admin, Level: <level>`.
   - For User: `Role: user, Age: <age>`.

#### **Goal:**
Practice combining type guards (e.g., checking `role` first and then narrowing further into nested properties).

---

### **Challenge Yourself!**
Once you complete these, move to more advanced problems, such as **Discriminated Unions** (as shared earlier). Let me know how these go or if you need hints for any! 🚀