
import {
    signInUser, getUserInfo
} from '../../services/request.js'


const signinButton = document.getElementById('signin-button')

signinButton.addEventListener('click', async () => {
    const p_email = document.getElementById('signin-email').value
    const p_password = document.getElementById('signin-password').value
    const recaptchaToken = document.getElementById('g-recaptcha-response').value

    try {
        const user = await signInUser(p_email, p_password, recaptchaToken)
        
        if (user.data.user.emailVerified) {
            const loggedInUid = user.data.user.uid
            const userType = await getUserType(loggedInUid)

            sessionStorage.setItem('uid', loggedInUid)
            sessionStorage.setItem('email', user.data.user.email)
            sessionStorage.setItem('userType', userType)
            
            if (userType === 'client') {
                window.top.location.href = '../structure/home-skeleton.html'
            } else {
                sessionStorage.setItem('userType', userType)
                window.top.location.href = '../structure/home-skeleton.html'
            }
        } else {
            throw new Error('Please verify your account first.')
        }
    } 
    catch (error) {
        const errorHolder = document.getElementById('error-message-holder')
        errorHolder.textContent = `Error signing in: Ensure all information is correct.`
        errorHolder.style.display = 'block';
    }
})

async function getUserType(uid) {
    try {
        const userInfo = await getUserInfo(uid)
        return userInfo.data.userType
    }
    catch (error) {
        return 'admin'
    }
}