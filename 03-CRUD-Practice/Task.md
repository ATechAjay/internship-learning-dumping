Great! Here are some **practice questions** to help you reinforce your understanding of CRUD operations, `fetch()` API, and TypeScript typing concepts. These tasks range from beginner to advanced levels and will cover both functional and practical skills.

---

### **Beginner Level**

#### **1. Fetch and Log Data**

- Create a function called `fetchUsers` to fetch a list of users from `https://jsonplaceholder.typicode.com/users`.
- Log only the names of the users to the console.
- Add error handling for network issues or unsuccessful responses.

#### **2. Add a New Post**

- Write a function called `addBlogPost` that accepts a blog object (`{ title: string, body: string, userId: number }`) as a parameter.
- Use `fetch()` to send a POST request to `https://jsonplaceholder.typicode.com/posts`.
- Log the response data (the created post) to the console.
- Return the created post from the function.

#### **3. Delete a Resource**

- Create a function called `deleteUser` that accepts a user ID as a parameter.
- Use `fetch()` to send a DELETE request to `https://jsonplaceholder.typicode.com/users/{id}`.
- Log a success or error message based on the response.

---

### **Intermediate Level**

#### **4. Update a Post**

- Write a function called `updateBlogPost` that takes:
  - `id`: The ID of the post to update.
  - `updatedData`: An object containing the fields to update (e.g., `{ title?: string, body?: string }`).
- Use the `PATCH` method to update only the specified fields of the post.
- Log the updated post data and return it.

#### **5. Fetch and Filter Data**

- Write a function called `fetchTodos` to fetch a list of todos from `https://jsonplaceholder.typicode.com/todos`.
- Filter the todos where `completed` is `true` and log only the filtered results.
- Return the filtered list from the function.

#### **6. Handle Response Headers**

- Write a function called `fetchPostWithHeaders` that:
  - Makes a `GET` request to `https://jsonplaceholder.typicode.com/posts/1`.
  - Logs the response headers (use `response.headers`).
  - Extracts and logs the `content-type` header value.

---

### **Advanced Level**

#### **7. Create a Generic Fetch Wrapper**

- Create a reusable function `fetchResource<T>(url: string, options?: RequestInit): Promise<T>` that:
  - Accepts a URL and optional fetch options.
  - Returns the parsed JSON data of type `T`.
- Use this function to fetch users, posts, and todos from the JSONPlaceholder API.

#### **8. Chain CRUD Operations**

- Write a script to:
  - Fetch all posts and log their titles.
  - Add a new post and log its ID.
  - Update the title of the newly added post.
  - Delete the newly added post.
- Ensure all operations are chained together (call one after the other).

#### **9. Paginated Fetch**

- Fetch data from `https://jsonplaceholder.typicode.com/posts`.
- Add a `limit` parameter to your function to fetch only the first `n` posts.
- Log the fetched posts and their total count.

---

### **Bonus: Real-World Simulation**

#### **10. CRUD App**

- Simulate a CRUD app where:
  - **Fetch All**: Display a list of posts fetched from the API.
  - **Add New**: Create a new post and display it in the list.
  - **Update**: Edit an existing post (e.g., update its title).
  - **Delete**: Remove a post from the list.
- Use functions for each operation and store the fetched posts in an array to simulate a frontend app.

---

### **Tips for Practice**

1. **Start Simple**: Begin with basic tasks like `fetchUsers` or `addBlogPost`.
2. **Break Down Problems**: Focus on one task at a time—fetching, error handling, or returning data.
3. **Experiment**: Change the API endpoints or parameters to explore how `fetch()` behaves with different inputs.
4. **Ask for Help**: If you get stuck on any question, share your code, and I’ll guide you!

Let me know how it goes or if you'd like hints for any of these tasks! 😊
