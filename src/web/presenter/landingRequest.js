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
        loggedInUid = 'sfdsfds'
        const response = await axios.post(
            'http://localhost:5500/users/insertUserInfo', { 
                uid: loggedInUid,
                firstname: p_user.firstname, 
                middlename: p_user.middlename, 
                lastname: p_user.lastname,
                town: p_user.town,
                city: p_user.city,
                userType: p_user.userType,
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

// get one user info for admin profile page.
async function getUserInfo(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserInfoById', {
                params: {
                    document: 'users-credential',
                    uid: p_uid,
                },
                headers: {'Content-Type': 'application/json', },
            }
        )
        return response
    } catch(error) {
        console.error('Process Error: ', error.message)
    }
}

// for list of reports per city
async function getAllByCity(p_city) {
    try {
        const response = await axios.get(
            'http://localhost:5500/data/getAllByConstraint', 
            {
                params: {field: 'city',
                constraint: p_city,
                },
                headers: { 'Content-Type': 'application/json', },
            }
        )
        // const filteredData = response.data.filter((doc) => doc.status !== "Resolved");
        return response;
    }
    catch(error) {
        console.error('Process Error: ', error.message)
    }
}

const signinButton = document.getElementById('signin-button')
signinButton.addEventListener('click', () => {
    const recaptchaToken = document.getElementById('g-recaptcha-response').value
    const p_email = document.getElementById('signin-email').value
    const p_password = document.getElementById('signin-password').value

    signInUser(p_email, p_password, recaptchaToken)
})

const signupButton = document.getElementById('signup-button')
signupButton.addEventListener('click', () => {
    const recaptchaToken = document.getElementById('g-recaptcha-response').value
    const p_email = document.getElementById('email').value
    const p_password = document.getElementById('password').value

    signupUser(p_email, p_password, recaptchaToken)
})

// const addNameButton = document.getElementById('add-name')
// addNameButton.addEventListener('click', () => {
//     const p_user = new userInfoModel()

//     p_user.firstname = document.getElementById('add_fname').value
//     p_user.middlename = document.getElementById('add_mname').value
//     p_user.lastname = document.getElementById('add_lname').value 
//     p_user.city = 'San Pascual'
//     p_user.town = 'Padre Castillo'
//     p_user.userType = 'client'

//     insertUserInfo(p_user)
// })


function sampleRun() {
    getAllByCity('San Pascual')
        .then((reportList) => {
            console.log('REPORT LIST:', reportList);
        })
        .catch((error) => {
            console.error('Error fetching report list:', error);
        });
}

function sampleRun1() {
    getUserInfo('jiZ0VjqKvPWDuimKsBcHwKNrqz43')
        .then((reportList) => {
            console.log('USER INFO:', reportList.data.firstname)
        })
        .catch((error) => {
            console.error('Error fetching user info:', error);
        });
}
