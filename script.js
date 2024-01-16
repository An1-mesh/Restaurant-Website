document.addEventListener('DOMContentLoaded', function () {
    // Hide forms initially
    document.querySelector('.form-container').style.display = 'none';
});

function changeTab(formId) {
    // Hide welcome box and show the selected form
    document.querySelector('.welcome-box').style.display = 'none';
    document.querySelector('.form-container').style.display = 'flex';

    var forms = document.querySelectorAll('.form');
    forms.forEach(function (form) {
        if (form.id === formId) {
            form.style.display = 'flex';
        } else {
            form.style.display = 'none';
        }
    });
}

function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
        alert('All fields must be filled out');
        return false;
    }

    // Additional validation rules for login can be added here

    return true;
}

function validateSignupForm() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!newUsername || !newPassword || !confirmPassword) {
        alert('All fields must be filled out');
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Additional validation rules for signup can be added here

    return true;
}
