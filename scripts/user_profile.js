document.addEventListener('DOMContentLoaded', () => {
    // Select the edit and save buttons, and form input fields
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const formInputs = document.querySelectorAll('#userProfileForm input');

    // Event listener for the edit button
    editButton.addEventListener('click', () => {
        // Remove the readonly attribute from all form inputs to allow editing
        formInputs.forEach(input => input.removeAttribute('readonly'));

        // Hide the edit button and show the save button
        editButton.style.display = 'none';
        saveButton.style.display = 'inline';
    });

    // Event listener for the save button
    saveButton.addEventListener('click', () => {
        // Set the readonly attribute back to all form inputs to prevent further editing
        formInputs.forEach(input => input.setAttribute('readonly', 'readonly'));

        // Show the edit button and hide the save button
        editButton.style.display = 'inline';
        saveButton.style.display = 'none';

        // Alert to indicate that changes have been saved
        alert('Changes saved!');
        // Here you can add AJAX call or other logic to actually save the changes to a server or database
    });
});
