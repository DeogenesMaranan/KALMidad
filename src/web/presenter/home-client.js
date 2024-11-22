import UserCredential  from "../../model/user-credential.js"
import { UsToLongDateConverter, capitalize } from "../../services/converter.js"


const submitInfoButton = document.getElementById('submit-button')
const popupBackground = document.getElementById('popup-container')
const noReportDisplay = document.getElementById('no-report-container')
const addNewReportButton = document.getElementById('add-new-report-button')
const closeReportPopupButton = document.getElementById('close-report-popup')


onPageLoad()
async function onPageLoad() {
    try {
        const uid = sessionStorage.getItem('uid')
        const userReports = await getAllUserReport(uid)

        console.log('Reports:', userReports.data.data[0].imageLink)
        displayReports(userReports.data.data)
    }
    catch (error) {
        noReportDisplay.style.display = 'flex'
    }
}

closeReportPopupButton.addEventListener('click', () => {
    popupBackground.style.display = 'none'
})

addNewReportButton.addEventListener('click', async () => {
    try{
        const loggedInUid = sessionStorage.getItem('uid')
        await getUserInfo(loggedInUid)

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

function displayReports(reportList) {
    reportList.forEach((report) => {
        const mainContainer = document.querySelector('.main-container')
        const reportHolder = document.createElement('div')
        
        reportHolder.innerHTML = (`
            <img class="report-image" src="${report.imageLink}">
            <p><span class="report-label">Status:</span> ${capitalize(report.status)} </p>
            <p><span class="report-label">Calamity:</span> ${capitalize(report.calamity)} </p>
            <p><span class="report-label">Date:</span> ${UsToLongDateConverter(report.date)} </p>
        `)
    
        reportHolder.className = 'content report-holder'
        mainContainer.appendChild(reportHolder)
    })
}


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

async function getAllUserReport(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/data/getAllUserReports', {
                params: {
                    document: 'report',
                    uid: p_uid,
                    subcollection: 'userReport',
                },
            },
        )
        return response
    }
    catch(error) { throw error }
}