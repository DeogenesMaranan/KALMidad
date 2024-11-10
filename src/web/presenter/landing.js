
let recaptchaToken = '';

function onRecaptchaSuccess(token) {
  recaptchaToken = token; // Store the token in a variable
  console.log('reCAPTCHA token:', recaptchaToken);
}

async function signInUser(p_email, p_password, recaptchaToken) {
  try {
    const response = await axios.post('http://localhost:5500/users/signin', {
      p_email,
      p_password,
      recaptchaToken,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.data.message === 'Signin successful') {
      console.log('User signed in:', response.data.user);
    }
  } catch (error) {
    console.error('Sign-in error:', error);
  }
};

const signinButton = document.getElementById('signin')
signinButton.addEventListener('click', () => {
    const p_email = document.getElementById('in_email').value
    const p_password = document.getElementById('in_password').value

    signInUser(p_email, p_password, recaptchaToken);
})

