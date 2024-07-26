document.addEventListener('DOMContentLoaded', () => {
    // Retrieve product details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Assuming product ID is passed in the URL

    const products = {
        tea1: { name: 'Green Tea', price: 10, quantity: 20, image: 'images/product1.jpg' },
        tea2: { name: 'Black Tea', price: 12, quantity: 15, image: 'images/product2.jpg' },
        tea3: { name: 'Oolong Tea', price: 14, quantity: 10, image: 'images/product3.jpg' },
        tea4: { name: 'White Tea', price: 18, quantity: 8, image: 'images/product4.jpg' },
        coffee1: { name: 'Arabica Coffee', price: 15, quantity: 15, image: 'images/product5.jpg' },
        coffee2: { name: 'Robusta Coffee', price: 12, quantity: 20, image: 'images/product1.jpg' },
        coffee3: { name: 'Espresso', price: 20, quantity: 10, image: 'images/product2.jpg' },
        coffee4: { name: 'Cappuccino', price: 18, quantity: 8, image: 'images/product3.jpg' },
    };

    // Function to update product details on the page
    function updateProductDetails(product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `Price: $${product.price}`;
        document.getElementById('product-quantity').textContent = `Available Quantity: ${product.quantity}`;
    }

    // Get the product details based on the product ID
    if (productId && products[productId]) {
        updateProductDetails(products[productId]);
    } else {
        alert('Product not found');
    }

    // Handle add to cart functionality
    document.getElementById('add-to-cart').addEventListener('click', () => {
        if (products[productId]) {
            if (products[productId].quantity > 0) {
                products[productId].quantity -= 1;
                document.getElementById('product-quantity').textContent = `Available Quantity: ${products[productId].quantity}`;
                alert('Product added to cart');
            } else {
                alert('Sorry, this product is out of stock');
            }
        }
    });
});
