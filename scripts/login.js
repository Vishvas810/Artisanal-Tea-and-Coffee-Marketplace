// Define hardcoded usernames and passwords
const validCredentials = {
    'vishvas@gmail.com': 'VishvasPatel',
    'patel@gmail.com': 'VishvasPatel'
};

// Handle form submission for user login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve the values from the form fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Validate the login data
    if (validateLogin(email, password)) {
        if (checkCredentials(email, password)) {
            // Display a success message if credentials are valid
            let message = document.getElementById('loginMessage');
            message.className = 'message-success';
            message.textContent = 'Login successful!';
            
            // Redirect to the product listing page
            setTimeout(() => {
                window.location.href = 'product_listing.html';
            }, 1000); // Delay redirection for 1 second to show the success message
        } else {
            // Display an error message if credentials are invalid
            let message = document.getElementById('loginMessage');
            message.className = 'message-error';
            message.textContent = 'Invalid email or password.';
        }
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

// Function to check if the provided credentials are valid
function checkCredentials(email, password) {
    return validCredentials[email] === password;
}
