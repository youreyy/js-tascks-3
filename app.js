const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1500, inStock: true },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 25, inStock: true },
    { id: 3, name: "Mug", category: "Kitchen", price: 12, inStock: false },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 5, name: "Shirt", category: "Clothing", price: 60, inStock: true }
];

console.log("First product:", products[0].name);
console.log("Last product:", products[products.length - 1].name);
console.log("Number of products:", products.length);

for (const product of products) {
    console.log(`#${product.id} ${product.name} | ${product.category} | $${product.price} | In stock: ${product.inStock}`);
}

const selectedCategories = new Set();

selectedCategories.add("Electronics");
selectedCategories.add("Clothing");
selectedCategories.add("Kitchen");
selectedCategories.add("Electronics");

console.log(selectedCategories);
console.log("Size:", selectedCategories.size);
console.log("Has Clothing?", selectedCategories.has("Clothing"));

const currentUser = {
    id: 101,
    name: "Yousef Mohamed",
    email: "yousef@mail.com",
    address: {
        street: "8 Al-Haram Street",
        city: "Giza",
        country: "Egypt"
    }
};

const city = currentUser.address.city;
console.log("User city:", city);

const cartQuantity = new Map();

cartQuantity.set(1, 2);
cartQuantity.set(2, 3);
cartQuantity.set(4, 1);

console.log("Quantity for product 1:", cartQuantity.get(1));
console.log("Does product 3 exist?", cartQuantity.has(3));
console.log("Cart size:", cartQuantity.size);

function calculateCartTotal(products, cartQuantity) {
    let total = 0;

    for (const product of products) {
        const quantity = cartQuantity.get(product.id)
        total += product.price * quantity;
    }

    return total;
}

const total = calculateCartTotal(products, cartQuantity);
console.log(`Cart total: ${total}`);