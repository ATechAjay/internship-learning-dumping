Enums in TypeScript are a way to `define a group of named constants that are related to each other`. These constants can either be `numeric` or `string` values. 

Enums make your code more readable and maintainable by giving meaningful names to constants instead of using plain numbers or strings.


# 1. Numeric Enums
Numeric enums are the default in TypeScript. They assign auto-incremented numbers to each member, starting from `0`.

Syntax:
```typescript
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}
```

*Usage*:
```typescript
const move = Direction.Up;
console.log(move); // Output: 0
```

You can also assign custom values to the members:
```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
console.log(Status.Success); // Output: 200
```

# 2. String Enums
String enums allow each member to have a custom string value.

Syntax:
```typescript
enum Response {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}
```

Usage:
```typescript
const status = Response.Success;
console.log(status); // Output: SUCCESS
```

String enums are useful when the values need to be human-readable or when you need precise string comparisons.

# 3. Heterogeneous Enums
You can mix `string and numeric` values in the same enum, though this is generally not recommended for clarity.

Syntax:
```typescript
enum Mix {
  Yes = 1,
  No = "NO",
}
```

Usage:
```typescript
console.log(Mix.Yes); // Output: 1
console.log(Mix.No);  // Output: NO
```

# 4. Enum Members as Computed Values
Enum values can also be calculated based on other values.

Syntax:
```typescript
enum Days {
  Sunday,
  Monday,
  Tuesday,
  TotalDays = Sunday + Monday + Tuesday, // Computed value
}
```

Usage:
```typescript
console.log(Days.TotalDays); // Output: 3
```

# 5. Reverse Mapping
In numeric enums, TypeScript provides a reverse mapping from values to names.

 Example:
```typescript
enum Colors {
  Red = 1,
  Green,
  Blue,
}
console.log(Colors.Green);       // Output: 2
console.log(Colors[2]);          // Output: Green
```

# 6. Use Cases of Enums
1. Represent Directions or Options:
   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   ```

2. API Status Codes:
   ```typescript
   enum Status {
     OK = 200,
     BadRequest = 400,
     Unauthorized = 401,
     Forbidden = 403,
     NotFound = 404,
   }
   ```

3. Role Management:
   ```typescript
   enum Role {
     Admin = "ADMIN",
     User = "USER",
     Guest = "GUEST",
   }
   ```

4. Days of the Week:
   ```typescript
   enum Weekday {
     Sunday,
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
   }
   ```

# Tips for Using Enums
- Use string enums when meaningful string values are needed for debugging or serialization.

- Prefer constants (`const enum`) for better performance in large applications. `const enum` values are inlined at compile time:

  ```typescript
  const enum Size {
    Small = 1,
    Medium = 2,
    Large = 3,
  }
  console.log(Size.Small); // Output: 1
  ```

Enums are powerful for organizing your constants and making your code cleaner and more expressive. Let me know if you'd like to dive deeper into any aspect!

---
---
---
---
---
---
---
---
---
---



### What are Enums?
Enums (short for Enumerations) are a feature in TypeScript that allow you to define a group of named constants. They are unique to TypeScript and are not a type-level extension of JavaScript. Enums make it easier to:
- Document intent.
- Create distinct cases.
- Handle multiple related constant values in a clean, readable way.

TypeScript provides two types of enums:
1. Numeric Enums
2. String Enums

---

### 1. Numeric Enums
In numeric enums, each member is assigned a numeric value. By default, the first member starts at `0`, and the subsequent members increment by `1`.

#### Example 1: Default Behavior
```typescript
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}
console.log(Direction.Up);   // Output: 0
console.log(Direction.Left); // Output: 2
```

#### Example 2: Custom Starting Value
If you assign a value to one member, the subsequent members increment from there:
```typescript
enum Direction {
  Up = 11,  // Starts from 11
  Down,    // 12
  Left,    // 13
  Right,   // 14
}
console.log(Direction.Down); // Output: 12
```

#### Example 3: Specifying All Values
You can also explicitly define values for all members:
```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
console.log(Status.NotFound); // Output: 404
```

---

### 2. String Enums
In string enums, each member must be explicitly initialized with a string value. Unlike numeric enums, string enums do not auto-increment.

#### Example:
```typescript
enum Response {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}
console.log(Response.Success); // Output: SUCCESS
```

Benefit: String enums are more meaningful during debugging since the values (like `"SUCCESS"`) are human-readable.

---

### 3. Heterogeneous Enums
You can mix numeric and string values in the same enum. However, this is not recommended unless you have a specific use case.

#### Example:
```typescript
enum Mix {
  Yes = 1,
  No = "NO",
}
console.log(Mix.Yes); // Output: 1
console.log(Mix.No);  // Output: NO
```

---

### 4. Computed and Constant Members
Each member in an enum is either:
- Constant: Can be determined at compile time.
- Computed: Requires a runtime calculation.

#### Rules for Constant Members:
1. The first member without an initializer gets the value `0`.
2. If a member is initialized with a numeric constant, subsequent members without initializers increment from it.

```typescript
enum Example {
  A,    // 0
  B,    // 1
  C = 5,
  D,    // 6
}
console.log(Example.D); // Output: 6
```

#### Computed Members:
These are calculated at runtime using expressions.
```typescript
enum FileAccess {
  None,
  Read = 1 << 1,       // 2
  Write = 1 << 2,      // 4
  ReadWrite = Read | Write, // 6
  Length = "123".length, // 3
}
console.log(FileAccess.Length); // Output: 3
```

---

### 5. Reverse Mapping
For numeric enums, TypeScript generates a reverse mapping, allowing you to access the name of a member using its value.

#### Example:
```typescript
enum Colors {
  Red = 1,
  Green,
  Blue,
}
console.log(Colors.Green);  // Output: 2
console.log(Colors[2]);     // Output: Green
```

> Note: Reverse mapping is not available for string enums.

---

### 6. Const Enums
Const enums are a performance-optimized version of enums. Their values are inlined during compilation, meaning they don’t generate additional JavaScript code.

#### Syntax:
```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

#### Usage:
```typescript
const moves = [Direction.Up, Direction.Down];
console.log(moves); // Output: [0, 1]
```

#### Compilation Output:
```javascript
"use strict";
const moves = [0 /* Direction.Up */, 1 /* Direction.Down */];
```

> Limitation: Const enums cannot have computed members.

---

### 7. Ambient Enums
Ambient enums are used to describe enums that already exist in another context, like JavaScript libraries. They are declared using `declare`.

#### Example:
```typescript
declare enum ExternalEnum {
  A = 1,
  B,
  C = 2,
}
```

---

### 8. Objects vs. Enums
Instead of enums, you can also use plain objects with `as const` for a similar effect.

#### Example:
```typescript
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

type DirectionType = typeof Direction[keyof typeof Direction];
function move(dir: DirectionType) {
  console.log(dir);
}

move(Direction.Up); // Output: 0
```

Why use objects?
- They align with JavaScript’s native behavior.
- Easier to transition if JavaScript introduces enums in the future.

---

### Use Cases for Enums
1. API Response Codes:
   ```typescript
   enum Status {
     Success = 200,
     NotFound = 404,
     InternalError = 500,
   }
   ```

2. File Permissions:
   ```typescript
   enum FileAccess {
     Read = 1,
     Write = 2,
     Execute = 4,
     All = Read | Write | Execute, // 7
   }
   ```

3. Days of the Week:
   ```typescript
   enum Weekday {
     Sunday,
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
   }
   ```

4. Direction Controls:
   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   ```

5. Role Management:
   ```typescript
   enum Role {
     Admin = "ADMIN",
     User = "USER",
     Guest = "GUEST",
   }
   ```

---

### Best Practices
- Use numeric enums for simple scenarios where you need sequential values.
- Use string enums for better readability and debugging.
- Use const enums for performance-critical applications.
- Avoid heterogeneous enums unless you have a specific requirement.

---

Enums are a powerful feature in TypeScript that add structure and readability to your code. Let me know if you’d like more examples or assistance with documenting this!