window.onload = function() {
    // similar behavior as an HTTP redirect
    window.location.replace(`${window.location.href}/basicspage.html`);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
        return;
    }

    // You can add more complex validation here

    // If validation passes, you can submit the form or do an AJAX request
    alert('Registration successful!');
    // This is where you would typically send the form data to the server
});
