document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        window.location.href = 'signin.html';
    } else {
        document.getElementById('usernameDisplay').textContent = loggedInUser.username;
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = 'signin.html';
    });
});
