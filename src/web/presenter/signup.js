import { resolve } from "path-browserify"

var loggedInUid
var accountConfirmed = false

if(document.getElementById('signup-button')) {
    const signupButton = document.getElementById('signup-button')

    signupButton.addEventListener('click', async () => {
        try {
            const p_email = document.getElementById('signup-email').value 
            const p_password = document.getElementById('signup-password').value 
            const recaptchaToken = document.getElementById('g-recaptcha-response').value
    
            const response = await signupUser(p_email, p_password, recaptchaToken)
            console.log('dfks')
    
            if (response.data.user.uid) {
                loggedInUid = response.data.user.uid 
                console.log("UID", loggedInUid)
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
        window.open('../structure/home_client.html', '_parent')
    })
}

async function signupUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signup',
            { p_email, p_password, recaptchaToken },
            { headers: { 'Content-Type': 'application/json' }}
        ) 
        return response 
    } catch (error) { throw error }
}

