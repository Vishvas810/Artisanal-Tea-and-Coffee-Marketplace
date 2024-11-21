document.addEventListener('DOMContentLoaded', () => {
    // Function to load cart items from localStorage and display them
    function loadCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartTableBody = document.querySelector('#cart-items tbody');
        const cartTotalElement = document.getElementById('cart-total');
        
        cartTableBody.innerHTML = ''; // Clear existing rows

        let total = 0; // Initialize total amount

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><i class="fas fa-trash-alt remove-item" data-id="${item.id}"></i></td>
            `;
            cartTableBody.appendChild(row);

            total += item.price * item.quantity; // Calculate total
        });

        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Handle item removal from cart
    function handleRemoveItem(event) {
        if (event.target.classList.contains('remove-item')) {
            const productId = event.target.dataset.id;
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Filter out the removed item
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            loadCartItems(); // Reload cart items
        }
    }

    // Load cart items on page load
    loadCartItems();

    // Event listener for remove item icons
    document.querySelector('.shopping-cart').addEventListener('click', handleRemoveItem);
});
