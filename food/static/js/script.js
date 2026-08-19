document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Demo login: any non-empty username & password is accepted.
    if (!username || !password) {
        errorMessage.textContent = "Please enter a username and password.";
    } else {
        sessionStorage.setItem('spypizza_user', username);
        window.location.href = 'b/';
    }
});
