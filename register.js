// Show additional fields based on role
function showAdditionalFields() {
    const role = document.getElementById('role').value;
    const studentFields = document.getElementById('studentFields');
    const staffFields = document.getElementById('staffFields');
    const departmentField = document.getElementById('departmentField');
    const streamSelect = document.getElementById('stream');

    if (role === 'student') {
        studentFields.style.display = 'block';
        staffFields.style.display = 'none';

        streamSelect.onchange = function() {
            const streamValue = this.value;
            if (streamValue === 'Engineering' || streamValue === 'Polytechnic') {
                departmentField.style.display = 'block';
            } else {
                departmentField.style.display = 'none';
            }
        };
    } else if (role === 'staff') {
        staffFields.style.display = 'block';
        studentFields.style.display = 'none';
        departmentField.style.display = 'none';
    } else {
        studentFields.style.display = 'none';
        staffFields.style.display = 'none';
        departmentField.style.display = 'none';
    }
}

// Add event listener to toggle password visibility
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === 'success') {
            alert('Registration successful!');
            window.location.href = 'login.html';
        } else {
            alert('Registration failed: ' + data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
