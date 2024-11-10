import nameModel from '../../model/name.js'


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

async function insertName(p_name) {
    try {
        const response = await axios.post(
            'http://localhost:5500/names/insertName', { 
                uid: loggedInUid,
                firstname: p_name.firstname, 
                middlename: p_name.middlename, 
                lastname: p_name.lastname
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
    const p_name = new nameModel()

    p_name.firstname = document.getElementById('add_fname').value
    p_name.middlename = document.getElementById('add_mname').value
    p_name.lastname = document.getElementById('add_lname').value

    insertName(p_name)
})