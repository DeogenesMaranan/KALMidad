import UserCredential  from "../../model/user-credential.js"
import { UsToLongDateConverter, capitalize } from "../../services/converter.js"
import {
    getUserInfo,
    deleteReport,
    insertUserInfo,
    getAllUserReport
} from '../../services/request.js'


var userReports, uid 
const submitInfoButton = document.getElementById('submit-button')
const popupBackground = document.getElementById('popup-container')
const noReportDisplay = document.getElementById('no-report-container')
const cancelDeleteButton = document.getElementById('cancel-delete-button')
const addNewReportButton = document.getElementById('add-new-report-button')
const confirmDeleteButton = document.getElementById('confirm-delete-button')
const closeReportPopupButton = document.getElementById('close-report-popup')


document.addEventListener('DOMContentLoaded', async () => {
    try {
        uid = sessionStorage.getItem('uid')
        const response = await getAllUserReport(uid)
        userReports = response.data.data

        displayReports(userReports)
    }
    catch (error) {
        noReportDisplay.style.display = 'flex'
    }
})

closeReportPopupButton.addEventListener('click', () => {
    popupBackground.style.display = 'none'
})

addNewReportButton.addEventListener('click', async () => {
    try{
        const loggedInUid = sessionStorage.getItem('uid')
        await getUserInfo(loggedInUid)

        sessionStorage.setItem('client-report-request', 'add')
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
    reportList.reverse()

    reportList.forEach((report) => {
        const reportContainer = document.querySelector('.report-container')
        const reportHolder = document.createElement('div')
        
        reportHolder.setAttribute('data-id', report.id)
        reportHolder.setAttribute('image-link', report.imageLink)
        reportHolder.innerHTML = (`
            <div>
                <p style="display: none;">${report.id}</p>
                <img class="report-image" src="${report.imageLink}">
                <p><span class="report-label">Status:</span> ${capitalize(report.status)} </p>
                <p><span class="report-label">Calamity:</span> ${capitalize(report.calamity)} </p>
                <p><span class="report-label">Date:</span> ${UsToLongDateConverter(report.date)} </p>
            </div>

            <div class="hover-buttons">
                <button class="edit-button">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="delete-button">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        `)

        reportHolder.className = 'content report-holder reports'
        reportContainer.appendChild(reportHolder)
    })
}

const reportContainer = document.querySelector('.report-container')
reportContainer.addEventListener('click', (e) => {
    if (e.target.closest('.edit-button')) {
        handleEdit(e)
    }
    if (e.target.closest('.delete-button')) {
        handleDelete(e)
    }
})

function handleEdit(e) {
    const reportHolder = e.target.closest('.report-holder')
    const reportId = reportHolder.getAttribute('data-id') 

    sessionStorage.setItem('update-report-id', reportId)
    sessionStorage.setItem('client-report-request', 'update')
    window.location.href = '../structure/add-report.html'
}

function handleDelete(e) {
    try {
        const reportHolder = e.target.closest('.report-holder')
        const reportId = reportHolder.getAttribute('data-id')
        const imageLink = reportHolder.getAttribute('image-link')
        
        document.querySelector('#delete-container').style.display = 'flex'
        const elements = document.getElementsByClassName('hover-buttons')

        Array.from(elements).forEach((element) => {
            element.style.display = 'none'
        })        

        handleDeleteEvent(reportId, imageLink)
    }
    catch(error) { console.error(error) }
}

function handleDeleteEvent(reportId, imageLink) {
    cancelDeleteButton.addEventListener('click', () => {
        document.querySelector('#delete-container').style.display = 'none'
        window.location.reload()
    })

    confirmDeleteButton.addEventListener('click', async () => {
        try {
            const response = await deleteReport(uid, imageLink, reportId)
            if (response) window.location.reload()
        }
        catch(error) { throw ('Delete error:', error) }
    })
}
