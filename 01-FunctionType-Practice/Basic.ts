// Basic Level Tasks

// Define a type for a Product object with the following properties: id, name, price, and category. Then write a function:

// That accepts a single product and returns the product's name.
// Create a function:

// That takes an array of Product objects and returns the total count of products.
// Write a function:

// That calculates the total price of all products in an array of Product objects.
// Ensure that the return type is number.

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

const productItems: Product[] = [
  { id: 1, name: "Book", price: 500, category: "Education" },
  { id: 2, name: "Laptop", price: 25000, category: "Tech" },
  { id: 3, name: "T-Shirt", price: 1000, category: "Clothe" },
];

function getTotalProduct(productItems: Product[]): number {
  return productItems.length;
}

function calcTotalPrice(productItems: Product[]): number {
  const totalProducts = getTotalProduct(productItems);
  console.log(totalProducts);

  const totalPrice = productItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return totalPrice;
}

calcTotalPrice(productItems);
