import axios from 'axios'


export const signInUser = async (p_email, p_password, recaptchaToken) => {
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

