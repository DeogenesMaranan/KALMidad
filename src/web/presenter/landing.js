import userInfoModel from '../../model/user-credential.js'


let loggedInUid;

async function signInUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signin', 
            { p_email, p_password, recaptchaToken, }, 
            { headers: { 'Content-Type': 'application/json', }}
        );

        if (response.data && response.data.message) {
            loggedInUid = response.data.user.uid
            console.log('User signed in:', response.data.user)
        }
    } catch (error) {
        console.error('Sign-in error:', error);
    }
};

async function signupUser(p_email, p_password, recaptchaToken) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/signup',
            { p_email, p_password, recaptchaToken, },
            { headers: { 'Content-Type': 'application/json', }}
        )
        if (response.data && response.data.message) {
            loggedInUid = response.data.user.uid
            console.log('User signed up:', response.data.user)
        }
    } catch(error) {
        console.error('Sign-up error:', error)
    }
}

async function insertUserInfo(p_user) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/insertUserInfo', { 
                uid: loggedInUid,
                firstname: p_user.firstname, 
                middlename: p_user.middlename, 
                lastname: p_user.lastname,
                suffix: p_user.suffix,
                region: p_user.region,
                state: p_user.state,
                town: p_user.town,
                city: p_user.city,
            }, 
            { headers: { 'Content-Type': 'application/json', }}
        )
        if (response.data.message) {
            console.log('Process Successful: ', response.data.message)
        }
    } catch(error) {
        console.error('Process Error: ', error.message)
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

const addNameButton = document.getElementById('add-name')
addNameButton.addEventListener('click', () => {
    const p_user = new userInfoModel()

    p_user.firstname = document.getElementById('add_fname').value
    p_user.middlename = document.getElementById('add_mname').value
    p_user.lastname = document.getElementById('add_lname').value 
    p_user.region = "Region IVA - CALABORZON"
    p_user.state = 'Batangas'
    p_user.city = 'San Pascual'
    p_user.town = 'Padre Castillo'

    insertUserInfo(p_user)
})