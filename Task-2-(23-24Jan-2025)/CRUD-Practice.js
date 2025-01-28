"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Write a function named fetchOrders that:
// Makes a GET request to fetch all orders.
// Logs the fetched data to the console.
// Handles any errors.
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
            //     console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = yield response.json();
            //     const data:Post = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log("Error in fetching data...", error);
        }
    });
}
fetchPosts();
// Task 2: Add a New Order (POST Request)
// Write a function called addOrder that accepts an object representing an order (e.g., { productName: string; quantity: number; price: number }).
// Use fetch() to send a POST request to create a new order. For this, use the URL https://jsonplaceholder.typicode.com/posts.
// Ensure you set the method to POST, the headers to application/json, and send the order object in the request body.
// After the order is added, log the added order data to the console.
// Handle errors if something goes wrong with the request.
// Goal: Add an order and log the response to the console.
function addPost(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(obj),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
            }
            const data = yield response.json();
            console.log("Post added", data);
        }
        catch (error) {
            //     console.log("Error during posting...", error);
        }
    });
}
addPost({
    id: 223,
    userId: 9,
    title: "Hello this is title",
    body: "Body content goes here",
});
// Task 3: Update an Existing Order (PUT Request)
// Write a function called updateOrder that takes an id and an object representing the order fields to update (e.g., { price: number }).
// Use fetch() to send a PUT request to the API (you can use https://jsonplaceholder.typicode.com/posts/{id} for the URL).
// Set the method to PUT, the headers to application/json, and the body to the updated order.
// After updating the order, log the updated data to the console.
// Make sure to handle errors (for example, when the order ID does not exist).
// Goal: Update an existing order and log the updated data.
function updatePost(id, updatedPost
//   updatedPost: { userId?: number; title?: string; body?: string }
) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedPost),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error! ${response.status}`);
            }
            const data = yield response.json();
            //     console.log("Modified data", data);
            return data;
        }
        catch (error) {
            console.log("Error in updating", error);
        }
    });
}
updatePost(1, { title: "This is new  title" }); // only title will be modified.
// Task 4: Delete an Order (DELETE Request)
// Write a function called deleteOrder that takes an order id.
// Use fetch() to send a DELETE request to delete the order (use https://jsonplaceholder.typicode.com/posts/{id}).
// After deleting, log a success message to the console.
// Handle errors (for example, if the order ID does not exist).
// Goal: Delete an order and log the success or failure.
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
            });
            if (!response.ok)
                throw new Error(`HTTP Error, STATUS CODE: ${response.status}`);
            const deletedMsg = yield response.json();
            console.log("Post Deleted");
        }
        catch (error) {
            console.log("Error in deleting post", error);
        }
    });
}
deletePost(1);
// Task 5: Combine All CRUD Operations
// Create a function called testCRUDOperations.
// In testCRUDOperations, call the following functions in this order:
// Fetch all orders.
// Add a new order.
// Fetch all orders again to check the new order.
// Update an existing order.
// Fetch orders again to verify the update.
// Delete the order.
// Fetch orders one final time to ensure the deletion worked.
// Goal: Orchestrate all CRUD operations and ensure they work as expected.
function testCRUDOperations() {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch all orders.
        fetchPosts();
        // Add a new order.
        addPost({
            id: 525,
            userId: 49,
            title: "Hello from the main function",
            body: "Body content goes here",
        });
    });
}
testCRUDOperations();
