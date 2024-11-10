import signInUser from '../request/user.js'

const baseUrl = 'http//localhost:5500'
let recaptchaToken = '';


function onRecaptchaSuccess(token) {
  recaptchaToken = token; // Store the token in a variable
  console.log('reCAPTCHA token:', recaptchaToken);
}


const signinButton = document.getElementById('signin')
signinButton.addEventListener('click', () => {
    const p_email = document.getElementById('in_email').value
    const p_password = document.getElementById('in_password').value

    signInUser(p_email, p_password, recaptchaToken);
})