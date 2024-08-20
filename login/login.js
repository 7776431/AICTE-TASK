function showRegister() {
    document.getElementById('auth-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful! You can now log in.');
        showLogin();
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
    } else {
        alert('Incorrect username or password.');
    }
}

function logout() {
    document.getElementById('secured-page').style.display = 'none';
    showLogin();
}
