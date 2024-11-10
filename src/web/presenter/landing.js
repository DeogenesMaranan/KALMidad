
const baseUrl = 'http://localhost:5500/users'

async function signInUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            `${baseUrl}/signin`, 
            { p_email, p_password, recaptchaToken, }, 
            { headers: { 'Content-Type': 'application/json', }}
        );

        if (response.data && response.data.message) {
            console.log('User signed in:', response.data.user)
        }
    } catch (error) {
        console.error('Sign-in error:', error);
    }
};

async function signupUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            `${baseUrl}/signup`,
            { p_email, p_password, recaptchaToken, },
            { headers: { 'Content-Type': 'application/json', }}
        )
        if (response.data && response.data.message) {
            console.log('User signed up:', response.data.user)
        }
    } 
    catch(error) {
        console.error('Sign-up error:', error)
    }
}

const signinButton = document.getElementById('signin')
signinButton.addEventListener('click', () => {
    const recaptchaToken = document.getElementById('g-recaptcha-response').value
    const p_email = document.getElementById('in_email').value
    const p_password = document.getElementById('in_password').value

    signInUser(p_email, p_password, recaptchaToken)
})

const signupButton = document.getElementById('signup')
signupButton.addEventListener('click', () => {
    const recaptchaToken = document.getElementById('g-recaptcha-response').value
    const p_email = document.getElementById('email').value
    const p_password = document.getElementById('password').value

    signupUser(p_email, p_password, recaptchaToken)
})