import UserCredential  from "../../model/user-credential.js"

const submitInfoButton = document.getElementById('submit-button')
const popupBackground = document.getElementById('popup-container')
const addNewReportButton = document.getElementById('add-new-report-button')
const closeReportPopupButton = document.getElementById('close-report-popup')

closeReportPopupButton.addEventListener('click', () => {
    popupBackground.style.display = 'none'
})

addNewReportButton.addEventListener('click', async () => {
    try{
        const loggedInUid = sessionStorage.getItem('uid')
        const response = await getUserInfo(loggedInUid)
        
        window.location.href = '../structure/add-report.html'
    }
    catch(error) { 
        popupBackground.style.display = 'flex'
    }
})

submitInfoButton.addEventListener('click', async () => {
    try {
        const p_userInfo = new UserCredential()
        const p_uid = sessionStorage.getItem('uid')

        p_userInfo.firstname = document.getElementById('first-name').value
        p_userInfo.middlename = document.getElementById('middle-name').value
        p_userInfo.lastname = document.getElementById('last-name').value
        p_userInfo.town = document.getElementById('town').value
        p_userInfo.city = document.getElementById('city').value
        p_userInfo.userType = sessionStorage.getItem('userType')

        await insertUserInfo(p_userInfo, p_uid)
    } 
    catch(error) {console.error(error) }
})

async function getUserInfo(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserInfoById', {
                params: {
                    document: 'users-credential',
                    uid: p_uid,
                },
                headers: { 'Content-Type': 'application/json' },
            }
        )
        return response
    } catch(error) { throw error }
}

async function insertUserInfo(p_user, p_uid) {
    try {
        const response = await axios.post(
            'http://localhost:5500/users/insertUserInfo', {
                uid: p_uid,
                firstname: p_user.firstname, 
                middlename: p_user.middlename, 
                lastname: p_user.lastname,
                town: p_user.town,
                city: p_user.city,
                userType: p_user.userType,
            },
            { headers: { 'Content-Type': 'application/json' },}
        )
        return response
    } catch(error) { throw error }
}