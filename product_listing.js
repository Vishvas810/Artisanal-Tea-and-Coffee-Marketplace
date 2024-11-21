document.addEventListener('DOMContentLoaded', () => {
    // Array of image paths for random product images
    const images = [
        'images/product1.jpg',
        'images/product2.jpg',
        'images/product3.jpg',
        'images/product4.jpg',
        'images/product5.jpg'
    ];

    // Function to get a random image from the array
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Assign random images to each product item
    document.getElementById('tea1').src = getRandomImage();
    document.getElementById('tea2').src = getRandomImage();
    document.getElementById('tea3').src = getRandomImage();
    document.getElementById('tea4').src = getRandomImage();

    document.getElementById('coffee1').src = getRandomImage();
    document.getElementById('coffee2').src = getRandomImage();
    document.getElementById('coffee3').src = getRandomImage();
    document.getElementById('coffee4').src = getRandomImage();

    // Search functionality for filtering products based on user input
    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const isMatch = title.includes(query);
            item.style.display = isMatch ? '' : 'none';
        });
    });
});
