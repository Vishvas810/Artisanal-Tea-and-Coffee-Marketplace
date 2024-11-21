document.addEventListener('DOMContentLoaded', () => {
    // Array of image paths for random product images
    const images = [
        '../images/product1.jpg',
        '../images/product2.jpg',
        '../images/product3.jpg',
        '../images/product4.jpg',
        '../images/product5.jpg'
    ];

    // Function to get a random image from the array
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        console.log(randomIndex);
        console.log(images[randomIndex]);
        return images[randomIndex];
    }

    // Initialize products
    const defaultProducts = {
        tea1: { name: 'Green Tea', price: 10, quantity: 20, images: [getRandomImage()] },
        tea2: { name: 'Black Tea', price: 12, quantity: 15, images: [getRandomImage()] },
        tea3: { name: 'Oolong Tea', price: 14, quantity: 10, images: [getRandomImage()] },
        tea4: { name: 'White Tea', price: 18, quantity: 8, images: [getRandomImage()] },
        coffee1: { name: 'Arabica Coffee', price: 15, quantity: 15, images: [getRandomImage()] },
        coffee2: { name: 'Robusta Coffee', price: 12, quantity: 20, images: [getRandomImage()] },
        coffee3: { name: 'Espresso', price: 20, quantity: 10, images: [getRandomImage()] },
        coffee4: { name: 'Cappuccino', price: 18, quantity: 8, images: [getRandomImage()] },
    };

    // Function to update localStorage with product details
    function updateLocalStorage(productId, productDetails) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || {};
        storedProducts[productId] = productDetails;
        localStorage.setItem('products', JSON.stringify(storedProducts));
    }

    // Load product details from localStorage or use default values
    function loadProductDetails(productId) {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        return storedProducts && storedProducts[productId] ? storedProducts[productId] : defaultProducts[productId];
    }

    // Assign random images to each product item
    function initializeProductImages() {
        Object.keys(defaultProducts).forEach(productId => {
            const product = loadProductDetails(productId);
            document.getElementById(productId).src = product.images[0];
            // Update product quantity and price displayed on the page
            const productElement = document.querySelector(`#${productId}`).parentElement;
            productElement.querySelector('h3').textContent = product.name;
            productElement.querySelector('p').textContent = `Price: $${product.price}`;
            productElement.querySelectorAll('p')[1].textContent = `Available Quantity: ${product.quantity}`;
        });
    }

    // Call the function to set images and product details
    initializeProductImages();

    // Search functionality for filtering products based on user input
    document.getElementById('search').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const isMatch = title.includes(query);
            item.style.display = isMatch ? '' : 'none';
        });
    });
});
