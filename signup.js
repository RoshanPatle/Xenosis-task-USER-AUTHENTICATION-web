document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validateSignupForm(username, email, password)) {
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Signup successful! Please sign in.');
        window.location.href = 'signin.html';
    }
});

function validateSignupForm(username, email, password) {
    if (!username || !email || !password) {
        alert('All fields are required.');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }
    return true;
}
