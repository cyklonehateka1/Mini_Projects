const username = document.querySelector('.username-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const confirmPassword = document.querySelector('.con-password-input');
const errorMessages = document.querySelectorAll('span');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    const usernameVal = username.value;
    const emailVal = email.value;
    const passwordVal = password.value;
    const conPasswordVal = confirmPassword.value;

    const usernameFunc = () => {

        if (usernameVal == '') {
            errorMessages[0].innerText = 'username cannot be blank';
            errorMessages[0].style.color = 'red'
            username.style.border = '1px solid red';
        }
        else if (usernameVal.includes(' ')) {
            errorMessages[0].innerText = 'username cannot be spaced';
            errorMessages[0].style.color = 'red'
            username.style.border = '1px solid red';
            // username.style.outline = '0.5px solid red';
        }
        else {
            errorMessages[0].style.color = 'green';
            errorMessages[0].innerText = 'username accepted';
            username.style.border = '1px solid green';
        }
    }

    const emailFunc = () => {
        if (emailVal.indexOf('@') < 1 || (emailVal.lastIndexOf('.') - emailVal.indexOf('@') < 2)) {
            errorMessages[1].innerText = 'please enter a valid email';
            errorMessages[1].style.color = 'red';
            email.style.border = '1px solid red';
        }
        else {
            errorMessages[1].innerText = 'email accepted';
            errorMessages[1].style.color = 'green';
            email.style.border = '1px solid green';
        }
    }

    const passwordFunc = () => {
        if (passwordVal.length < 6) {
            errorMessages[2].innerText = 'Password must be at least 6 characters';
            errorMessages[2].style.color = 'red';
            password.style.border = '1px solid red';
        }
        else if (passwordVal == 'password'|| passwordVal == 'Password' || passwordVal == 'PASSWORD') {
            errorMessages[2].innerText = 'Password cannot be "password"';
            errorMessages[2].style.color = 'red';
            password.style.border = '1px solid red';
        }
        else {
            errorMessages[2].innerText = 'Password accepted"';
            errorMessages[2].style.color = 'green';
            password.style.border = '1px solid green';
        }
    }

    const confirmPasswordFunc = () => {
        if (conPasswordVal.length == 0) {
            errorMessages[3].innerText = 'required';
            errorMessages[3].style.color = 'red';
            confirmPassword.style.border = '1px solid red'
        }
        else if (passwordVal != conPasswordVal) {
            errorMessages[3].innerText = 'passwords do not match';
            errorMessages[3].style.color = 'red';
            confirmPassword.style.border = '1px solid red';
        }
        else {
            errorMessages[3].innerText = 'password confirmed';
            errorMessages[3].style.color = 'green';
            confirmPassword.style.border = '1px solid green';
        }
    }

    usernameFunc();
    emailFunc();
    passwordFunc();
    confirmPasswordFunc();


})