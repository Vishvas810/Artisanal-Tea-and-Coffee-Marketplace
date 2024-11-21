// Handle form submission for user login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve the values from the form fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Validate the login data
    if (validateLogin(email, password)) {
        // Display a success message if validation is successful
        let message = document.getElementById('loginMessage');
        message.className = 'message-success';
        message.textContent = 'Login successful!';
    }
});

// Function to validate the login form data
function validateLogin(email, password) {
    let message = document.getElementById('loginMessage');
    
    // Check if any field is empty
    if (!email || !password) {
        message.className = 'message-error';
        message.textContent = 'Both fields are required.';
        return false;
    }
    
    // Validate the email format using a regular expression
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.className = 'message-error';
        message.textContent = 'Please enter a valid email address.';
        return false;
    }
    
    // Validate the password length
    if (password.length < 6) {
        message.className = 'message-error';
        message.textContent = 'Password must be at least 6 characters long.';
        return false;
    }
    
    // If all validations pass
    return true;
}
