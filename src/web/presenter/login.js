
import axios from "axios";


const signinButton = document.getElementById('signin-button')

signinButton.addEventListener('click', async () => {
    const p_email = document.getElementById('signin-email').value;
    const p_password = document.getElementById('signin-password').value;
    const recaptchaToken = document.getElementById('g-recaptcha-response').value;

    try {
        const user = await signInUser(p_email, p_password, recaptchaToken);
        
        if (user.data.user.emailVerified) {
            const loggedInUid = user.data.user.uid
            const userCred = await getUserType(loggedInUid)

            if (userCred.data.userType == 'client') {
                sessionStorage.setItem('uid', loggedInUid)
                sessionStorage.setItem('userType', userCred.data.userType)
                window.top.location.href = '../structure/home-skeleton.html'
            } else {
                // open admin home
            }
        } else {
            throw new Error('Please verify your account first.')
        }
    } 
    catch (error) {
        const errorHolder = document.getElementById('error-message-holder');
        errorHolder.textContent = `Error signing in: ${error.message}`;
        errorHolder.style.display = 'block';
    }
});

async function signInUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signin', 
            { p_email, p_password, recaptchaToken, }, 
            { headers: { 'Content-Type': 'application/json', }}
        )

        if (response.data && response.data.message) {
            return response
        }
    } catch(error) { throw error }
};

async function getUserType(uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserType',  {
                params: {
                    uid: uid,
                },
                headers: {'Content-Type': 'application/json', },
            }
        )
        return response
    }
    catch (error) { throw error}
}
