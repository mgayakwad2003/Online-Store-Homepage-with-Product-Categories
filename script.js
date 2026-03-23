// Product Data
const products = [
    {
        name: "Smartphone",
        price: 15000,
        category: "Electronics",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Laptop",
        price: 45000,
        category: "Electronics",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "T-shirt",
        price: 500,
        category: "Fashion",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jeans",
        price: 1200,
        category: "Fashion",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Book",
        price: 300,
        category: "Books",
        image: "https://via.placeholder.com/150"
    }
];

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
                <button>Add to Cart</button>
            </div>
        `;
    });
}

// Filter Function
function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Initial Load
displayProducts(products);