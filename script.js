// Handle form submission for user registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve the values from the form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Validate the form data
    if (validateRegistration(name, email, password)) {
        // Display a success message if validation is successful
        document.getElementById('message').style.color = '#007BFF'; // Set message color
        document.getElementById('message').textContent = 'Registration successful!';
    }
});

// Function to validate the registration form data
function validateRegistration(name, email, password) {
    let message = document.getElementById('message');
    
    // Check if any field is empty
    if (!name || !email || !password) {
        message.textContent = 'All fields are required.';
        return false;
    }
    
    // Validate the email format using a regular expression
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        return false;
    }
    
    // Validate the password length
    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        return false;
    }
    
    // If all validations pass
    return true;
}
