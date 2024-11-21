document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission for contact us
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Retrieve the values from the form fields
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Validate the contact form data
        if (validateContactForm(name, email, message)) {
            // Display a success message if validation is successful
            let messageContainer = document.getElementById('contactMessage');
            messageContainer.className = 'message-success';
            messageContainer.textContent = 'Thank you for your message! We will get back to you soon.';
            // Reset form fields
            document.getElementById('contactForm').reset();
        }
    });

    // Function to validate the contact form data
    function validateContactForm(name, email, message) {
        let messageContainer = document.getElementById('contactMessage');

        // Check if any field is empty
        if (!name || !email || !message) {
            messageContainer.className = 'message-error';
            messageContainer.textContent = 'All fields are required.';
            return false;
        }

        // Validate the email format using a regular expression
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messageContainer.className = 'message-error';
            messageContainer.textContent = 'Please enter a valid email address.';
            return false;
        }

        // If all validations pass
        return true;
    }
});
