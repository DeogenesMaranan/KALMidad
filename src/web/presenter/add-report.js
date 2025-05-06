import ReportModel from '../../model/report-details.js'
import {
    uploadImage, 
    insertReport,
    getAllUserReport,
    insertNewUser
} from '../../services/request.js'

let selectedImage, userReports, uid, reportId

const continueButton = document.getElementById('continue-button')
const popupContainer = document.getElementById('popup-container')
const reportFormHeader = document.getElementById('report-form-header')
const addReportButton = document.getElementById('submit-report-button')
const updateReportButton = document.getElementById('update-report-button')
const imageFileSelector = document.getElementById('image-file-selector')
const selectedImageHolder = document.getElementById('selected-image-holder')
const form = document.getElementById('support-form')

document.addEventListener('DOMContentLoaded', async () => {
    const requestType = sessionStorage.getItem('client-report-request')
    uid = sessionStorage.getItem('uid')

    if (requestType === 'add') {
        addReportButton.style.display = 'block'
    } else if (requestType === 'update') {
        updateReportButton.style.display = 'block'
        reportFormHeader.textContent = 'Update Request Form'

        const response = await getAllUserReport(uid)
        reportId = sessionStorage.getItem('update-report-id')

        userReports = response.data.data
        const [reportData] = userReports.filter(report => report.id === reportId)

        displayReportRecords(reportData)
        document.querySelector('.datetime-container').style.display = 'none'
        document.querySelector('.image-selector-container').style.display = 'none'
        document.querySelector('.right-container').style.height = '60%'
        document.querySelector('#town-input').disabled = false
    }
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (!form.checkValidity()) {
        form.reportValidity()
        return
    }

    try {
        const p_report = getUserInputAdd()
        const image = await uploadImage(selectedImage)

        p_report.imageLink = image.data.data
        p_report.flag = await floodProcessor(selectedImageHolder)

        const response = await insertReport(p_report, uid)
        const res = await insertNewUser(uid)

        if (response && res) {
            popupContainer.style.display = 'flex'
        }
    } catch (error) {
        console.error(error)
    }
})

updateReportButton.addEventListener('click', async () => {
    try {
        const [reportData] = userReports.filter(report => report.id === reportId)

        const p_report = getUserInputUpdate(reportData)
        const response = await insertReport(p_report, uid)

        if (response) {
            popupContainer.style.display = 'flex'
        }
    } catch (error) {
        console.error(error)
    }
})

imageFileSelector.addEventListener('change', (e) => {
    selectedImage = e.target.files[0]

    const reader = new FileReader()
    reader.onload = function (e) {
        selectedImageHolder.src = e.target.result
        selectedImageHolder.style.display = 'block'
    }
    reader.readAsDataURL(selectedImage)
})

continueButton.addEventListener('click', () => {
    window.top.location.href = '../structure/home-skeleton.html'
})

function getUserInputAdd() {
    const newReport = new ReportModel()

    newReport.status = 'pending'
    newReport.imageLink = selectedImage
    newReport.date = document.getElementById('date-input').value
    newReport.time = document.getElementById('time-input').value
    newReport.city = document.getElementById('city-input').value
    newReport.town = document.getElementById('town-input').value
    newReport.calamity = document.getElementById('calamity-dropdown').value
    newReport.description = document.getElementById('description-input').value || 'n/a'

    return newReport
}

function getUserInputUpdate(reports) {
    const newReport = new ReportModel()
    newReport.imageLink = reports.imageLink
    newReport.date = reports.date
    newReport.time = reports.time
    newReport.flag = reports.flag
    newReport.status = reports.status
    newReport.city = document.getElementById('city-input').value
    newReport.town = document.getElementById('town-input').value
    newReport.calamity = document.getElementById('calamity-dropdown').value
    newReport.description = document.getElementById('description-input').value || 'n/a'

    return newReport
}

function displayReportRecords(reportData) {
    sessionStorage.setItem('city', reportData.city)
    sessionStorage.setItem('town', reportData.town)

    document.getElementById('date-input').value = reportData.date
    document.getElementById('time-input').value = reportData.time
    document.getElementById('city-input').value = reportData.city
    document.getElementById('town-input').value = reportData.town
    document.getElementById('calamity-dropdown').value = reportData.calamity
    document.getElementById('description-input').value = reportData.description
}
