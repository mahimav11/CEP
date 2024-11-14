document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            alert('Login successful! Redirecting to home page...');
            window.location.href = 'home.html';
        } else {
            alert('Login failed: ' + data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
