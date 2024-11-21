// Handle form submission for user registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve the values from the form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let mobile = document.getElementById('mobile').value;
    
    // Validate the form data
    if (validateRegistration(name, email, password, confirmPassword, mobile)) {
        // Display a success message if validation is successful
        let message = document.getElementById('message');
        message.className = 'message-success';
        message.textContent = 'Registration successful! Redirecting to login page...';
        
        // Redirect to login page after a short delay to allow the success message to be visible
        setTimeout(function() {
            window.location.href = 'pages/login.html';
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

// Function to validate the registration form data
function validateRegistration(name, email, password, confirmPassword, mobile) {
    let message = document.getElementById('message');
    
    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword || !mobile) {
        message.className = 'message-error';
        message.textContent = 'All fields are required.';
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
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
        message.className = 'message-error';
        message.textContent = 'Passwords do not match.';
        return false;
    }
    
    // Validate the mobile number format using a regular expression
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        message.className = 'message-error';
        message.textContent = 'Please enter a valid 10-digit mobile number.';
        return false;
    }
    
    // If all validations pass
    return true;
}
