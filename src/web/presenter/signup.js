
import { signupUser, insertUserInfo } from '../../services/request.js'
import UserCredential from '../../model/user-credential.js'

if(document.getElementById('signup-button')) {
    const signupButton = document.getElementById('signup-button')

    signupButton.addEventListener('click', async () => {
        try {
            const p_email = document.getElementById('signup-email').value 
            const p_password = document.getElementById('signup-password').value 
            const recaptchaToken = document.getElementById('g-recaptcha-response').value
    
            const response = await signupUser(p_email, p_password, recaptchaToken)
            
            if (response.data.user.uid) {
                const uid = response.data.user.uid

                await initializeUserProfile(uid)
                sessionStorage.setItem('uid', uid) 
                window.open('../structure/signup-confirmation.html', '_self')
            }
        }
        catch(error) {
            const errorHolder = document.getElementById('error-message-holder')
            errorHolder.textContent = `Error signing up: Ensure email is active.`
            errorHolder.style.display = 'block'
        }
    })
}

if(document.getElementById('signup-inside')) {
    const loginRedirectButton = document.getElementById('signup-inside')

    loginRedirectButton.addEventListener('click', () => {
        window.open('../structure/login.html', '_self')
    })
}

if(document.getElementById('continue-button')) {
    const continueButton = document.getElementById('continue-button')

    continueButton.addEventListener('click', async () => {
        try {
            window.location.href = '../structure/login.html'
        }
        catch(error) { console.error(error) }
    })
}

async function initializeUserProfile(p_uid) {
    try {
        const p_userInfo = new UserCredential()
      
        p_userInfo.firstname = 'Not Set'
        p_userInfo.middlename = 'Not Set'
        p_userInfo.lastname = 'Not Set'
        p_userInfo.town = 'Not Set'
        p_userInfo.city = 'Not Set'
        p_userInfo.userType = 'client'

        await insertUserInfo(p_userInfo, p_uid)
    } 
    catch(error) {console.error(error) }
}
