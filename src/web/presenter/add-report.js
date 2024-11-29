
import ReportModel from '../../model/report-details.js'
import {
    uploadImage, 
    insertReport,
    getAllUserReport,
    insertNewUser
} from '../../services/request.js'


var selectedImage, userReports, uid, reportId

const continueButton = document.getElementById('continue-button')
const popupContainer = document.getElementById('popup-container')
const reportFormHeader = document.getElementById('report-form-header')
const addReportButton = document.getElementById('submit-report-button')
const imageFileSelector = document.getElementById('image-file-selector')
const updateReportButton = document.getElementById('update-report-button')
const selectedImageHolder = document.getElementById('selected-image-holder')


document.addEventListener('DOMContentLoaded', async () => {
    const requestType = sessionStorage.getItem('client-report-request')
    uid = sessionStorage.getItem('uid')
    email = sessionStorage.getItem('email')

    if (requestType === 'add') {
        addReportButton.style.display = 'block'
    } 
    else if (requestType === 'update') {
        updateReportButton.style.display = 'block'
        reportFormHeader.textContent = 'Update Request Form'

        const response = await getAllUserReport(uid)
        reportId = sessionStorage.getItem('update-report-id')

        userReports = response.data.data
        const [ reportData ] = userReports.filter(report => report.id === reportId)

        displayReportRecords(reportData)
        document.querySelector('.datetime-container').style.display = 'none'
        document.querySelector('.image-selector-container').style.display = 'none'
        document.querySelector('.right-container').style.height = '60%'
    }
})

addReportButton.addEventListener('click', async () => {
    try {
        const p_report = getUserInputAdd()
        console.log('add-1')
        const image = await uploadImage(selectedImage)
        console.log('add-2')

        p_report.imageLink = image.data.data   
        console.log('add-2.5')     
        p_report.flag = await floodProcessor(selectedImageHolder)
        console.log('add-3')
        
        const response = await insertReport(p_report, uid)
        console.log('add-4')
        const res = await insertNewUser(uid)

        if(response && res) {
            popupContainer.style.display = 'flex'
        }
    } 
    catch(error) { console.error(error) }
})

updateReportButton.addEventListener('click', async () => {
    try {
        const [ reportData ] = userReports.filter(report => report.id === reportId)
        
        const p_report = getUserInputUpdate(reportData)
        const response = await insertReport(p_report, uid)

        if(response) {
            popupContainer.style.display = 'flex'
        }
    }
    catch(error) { console.error(error) }
})

imageFileSelector.addEventListener('change', (e) => {
    selectedImage = e.target.files[0]

    const reader = new FileReader()
    reader.onload = function(e) {
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
    newReport.city = document.getElementById('city-dropdown').value
    newReport.town = document.getElementById('town-dropdown').value
    newReport.calamity = document.getElementById('calamity-dropdown').value 
    newReport.description = document.getElementById('description-input').value 

    if(newReport.description == "") { newReport.description = 'n/a'}

    return newReport
}

function getUserInputUpdate(reports) {
    const newReport = new ReportModel()
    newReport.imageLink = reports.imageLink
    newReport.date = reports.date
    newReport.time = reports.time
    newReport.flag = reports.flag
    newReport.status = reports.status
    newReport.city = document.getElementById('city-dropdown').value
    newReport.town = document.getElementById('town-dropdown').value
    newReport.calamity = document.getElementById('calamity-dropdown').value 
    newReport.description = document.getElementById('description-input').value 

    if(newReport.description == "") { newReport.description = 'n/a'}

    return newReport
}

function displayReportRecords(reportData) {
    document.getElementById('date-input').value = reportData.date
    document.getElementById('time-input').value = reportData.time
    document.getElementById('city-dropdown').value = reportData.city
    document.getElementById('town-dropdown').value = reportData.town
    document.getElementById('calamity-dropdown').value = reportData.calamity
    document.getElementById('description-input').value = reportData.description
}
