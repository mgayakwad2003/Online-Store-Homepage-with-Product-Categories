// Product Data with Rating
const products = [
    { name: "Smartphone", price: 15000, category: "Electronics", rating: 4.5, image: "https://via.placeholder.com/150" },
    { name: "Laptop", price: 45000, category: "Electronics", rating: 4.7, image: "https://via.placeholder.com/150" },
    { name: "T-shirt", price: 500, category: "Fashion", rating: 3.8, image: "https://via.placeholder.com/150" },
    { name: "Jeans", price: 1200, category: "Fashion", rating: 4.2, image: "https://via.placeholder.com/150" },
    { name: "Book", price: 300, category: "Books", rating: 4.0, image: "https://via.placeholder.com/150" }
];

let filteredProducts = [...products];

// Display Products
function displayProducts(productList) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    productList.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <p>⭐ ${product.rating}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
    });
}

// Category Filter
function filterProducts(category) {
    if (category === "All") {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts(filteredProducts);
}

// Price Filter
function filterByPrice(price) {
    if (price === "") {
        displayProducts(filteredProducts);
        return;
    }

    const filtered = filteredProducts.filter(p => p.price <= price);
    displayProducts(filtered);
}

// Rating Filter
function filterByRating(rating) {
    if (rating === "") {
        displayProducts(filteredProducts);
        return;
    }

    const filtered = filteredProducts.filter(p => p.rating >= rating);
    displayProducts(filtered);
}

// Sorting
function sortProducts(type) {
    let sorted = [...filteredProducts];

    if (type === "low") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
        sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);
}

// Initial Load
displayProducts(products);

// Search Function
function searchProducts(keyword) {
    const filtered = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );

    displayProducts(filtered);
}
let cart = [];

// Add to Cart
function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

// Update Cart UI
function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;

    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item}</li>`;
    });
}

// Toggle Cart
function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

// Checkout
function checkout() {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
}