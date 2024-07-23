document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lastModified').textContent = document.lastModified;
});

function handleSubmit() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    let message = '';

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        message = 'Please fill out all fields.';
    } else if (!validateEmail(email)) {
        message = 'Invalid email format.';
    } else if (password !== confirmPassword) {
        message = 'Passwords do not match.';
    } else {
        message = 'Form submitted successfully!';
        // Optionally, you can send the form data to the server here
        // For demonstration purposes, we will just show a confirmation popup
        alert('Form submitted successfully!');
    }

    messageDiv.textContent = message;

    // Prevent form submission to the server
    return false;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
