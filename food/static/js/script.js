document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const correctUsername = "spy";
    const correctPassword = "12345";

    if (username !== correctUsername && password !== correctPassword) {
        alert("Your username and password are wrong");
    } else if (username !== correctUsername) {
        alert("Your username is wrong");
    } else if (password !== correctPassword) {
        alert("Your password is wrong");
    } else {
        
        window.location.href='b/';
    }
});
