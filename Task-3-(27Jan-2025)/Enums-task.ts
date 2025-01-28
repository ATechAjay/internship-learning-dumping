// ### **Challenge: Check if a User is an Admin Using an Enum**

// #### **Task**:
// 1. Create a string enum `UserRole` with the following members:
//    - `Admin`
//    - `User`
//    - `Guest`

// 2. Write a function `isAdmin` that:
//    - Takes a `UserRole` as a parameter.
//    - Returns `true` if the role is `Admin`, otherwise returns `false`.

// 3. Test the function with different roles (`Admin`, `User`, `Guest`) and ensure it works as expected.

// #### **Expected Output Example**:
// ```typescript
// console.log(isAdmin(UserRole.Admin)); // true
// console.log(isAdmin(UserRole.User));  // false
// console.log(isAdmin(UserRole.Guest)); // false
// ```

// ---

// **Hint**: Use the `enum` as the type for the function parameter to ensure type safety. Let me know if you'd like further guidance or solutions!