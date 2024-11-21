document.addEventListener('DOMContentLoaded', () => {
    // Retrieve product details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Assuming product ID is passed in the URL

    const defaultProducts = {
        tea1: { name: 'Green Tea', price: 10, quantity: 20, images: ['../images/product1.jpg', '../images/product3.jpg', '../images/product4.jpg'] },
        tea2: { name: 'Black Tea', price: 12, quantity: 15, images: ['../images/product2.jpg', '../images/product1.jpg', '../images/product3.jpg'] },
        tea3: { name: 'Oolong Tea', price: 14, quantity: 10, images: ['../images/product3.jpg', '../images/product2.jpg', '../images/product5.jpg'] },
        tea4: { name: 'White Tea', price: 18, quantity: 8, images: ['../images/product4.jpg', '../images/product1.jpg', '../images/product2.jpg'] },
        coffee1: { name: 'Arabica Coffee', price: 15, quantity: 15, images: ['../images/product5.jpg', '../images/product1.jpg', '../images/product3.jpg'] },
        coffee2: { name: 'Robusta Coffee', price: 12, quantity: 20, images: ['../images/product1.jpg', '../images/product4.jpg', '../images/product2.jpg'] },
        coffee3: { name: 'Espresso', price: 20, quantity: 10, images: ['../images/product2.jpg', '../images/product1.jpg', '../images/product3.jpg'] },
        coffee4: { name: 'Cappuccino', price: 18, quantity: 8, images: ['../images/product3.jpg', '../images/product4.jpg', '../images/product5.jpg'] },
    };

    // Function to update localStorage with product details
    function updateLocalStorage(productId, productDetails) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || {};
        storedProducts[productId] = productDetails;
        localStorage.setItem('products', JSON.stringify(storedProducts));
    }

    // Function to update product details on the page
    function updateProductDetails(product) {
        const cycleRight = document.getElementById('cycle-right');
        Array.from(product.images).forEach(img => {
            var imgElement = $('<img />', {
                src: img
            });
            imgElement.appendTo(cycleRight);
        })
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `Price: $${product.price}`;
        document.getElementById('product-quantity').textContent = `Available Quantity: ${product.quantity}`;
    }

    // Function to load related products
    function loadRelatedProducts() {
        const relatedProductsContainer = document.getElementById('related-products-container');
        relatedProductsContainer.innerHTML = ''; // Clear container before adding new items

        let productCount = 0; // Counter for the number of related products

        for (const [key, product] of Object.entries(defaultProducts)) {
            if (key !== productId && productCount < 3) { // Check if not the current product and less than 3 products
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <a href="product_details.html?id=${key}">
                        <img src="${product.images[0]}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>Price: $${product.price}</p>
                    </a>
                `;
                relatedProductsContainer.appendChild(productItem);
                productCount++; // Increment the counter
            }

            if (productCount >= 3) { // Break the loop if 3 products are added
                break;
            }
        }
    }

    // Get the product details based on the product ID
    let productDetails = defaultProducts[productId];
    const storedProducts = JSON.parse(localStorage.getItem('products'));

    if (productId && storedProducts && storedProducts[productId]) {
        // If product details are stored in localStorage, use them
        productDetails = storedProducts[productId];
    } else if (!productId || !productDetails) {
        // If no valid product ID is found, show an error
        alert('Product not found');
        return;
    }

    updateProductDetails(productDetails);
    loadRelatedProducts();
    $('#cycle-right').cycle();

    // Handle add to cart functionality
    document.getElementById('add-to-cart').addEventListener('click', () => {
        if (productDetails) {
            if (productDetails.quantity > 0) {
                productDetails.quantity -= 1;
                document.getElementById('product-quantity').textContent = `Available Quantity: ${productDetails.quantity}`;
                updateLocalStorage(productId, productDetails);

                // Add product to cart
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const cartItem = cart.find(item => item.id === productId);
                if (cartItem) {
                    cartItem.quantity += 1;
                } else {
                    cart.push({ id: productId, name: productDetails.name, price: productDetails.price, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));

                alert('Product added to cart');
            } else {
                alert('Sorry, this product is out of stock');
            }
        }
    });

    // Handle feedback form submission
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('feedback-name').value;
        const message = document.getElementById('feedback-message').value;
        alert(`Thank you for your feedback, ${name}!`);
        e.target.reset(); // Clear form after submission
    });
});
