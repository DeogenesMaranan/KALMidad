
import { signupUser } from '../../services/request.js'


var loggedInUid

if(document.getElementById('signup-button')) {
    const signupButton = document.getElementById('signup-button')

    signupButton.addEventListener('click', async () => {
        try {
            const p_email = document.getElementById('signup-email').value 
            const p_password = document.getElementById('signup-password').value 
            const recaptchaToken = document.getElementById('g-recaptcha-response').value
    
            const response = await signupUser(p_email, p_password, recaptchaToken)
    
            if (response.data.user.uid) {
                loggedInUid = response.data.user.uid 
                window.open('../structure/signup-confirmation.html', '_self')
            }
        }
        catch(error) {
            const errorHolder = document.getElementById('error-message-holder')
            errorHolder.textContent = `Error signing up: ${error.message}`
            errorHolder.style.display = 'block'
        }
    })
}

if(document.getElementById('continueButton')) {
    const continueButton = document.getElementById('continueButton')

    continueButton.addEventListener('click', () => {
        sessionStorage.setItem('uid', loggedInUid)
        sessionStorage.setItem('userType', 'client')
        window.open('../structure/login.html', '_self')
    })
}


