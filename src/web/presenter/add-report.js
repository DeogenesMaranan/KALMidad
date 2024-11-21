
import axios from 'axios'
import ReportModel from '../../model/report-details.js'


var selectedImage
const continueButton = document.getElementById('continue-button')
const popupContainer = document.getElementById('popup-container')
const addReportButton = document.getElementById('submit-report-button')
const imageFileSelector = document.getElementById('image-file-selector')
const selectedImageHolder = document.getElementById('selected-image-holder')


addReportButton.addEventListener('click', async () => {
    try {
        const p_report = getUserInput()
        const uid = sessionStorage.getItem('uid')
        const image = await uploadImage(selectedImage)

        p_report.imageLink = image.data.data        
        p_report.flag = await floodProcessor(selectedImageHolder)
        
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


function getUserInput() {
    const newReport = new ReportModel()

    newReport.imageLink = selectedImage
    newReport.date = document.getElementById('date-input').value
    newReport.time = document.getElementById('time-input').value 
    newReport.city = document.getElementById('city-dropdown').value
    newReport.town = document.getElementById('town-dropdown').value
    newReport.calamity = document.getElementById('calamity-dropdown').value 
    newReport.description = document.getElementById('description-input').value 

    return newReport
}

async function uploadImage() {
    try {
        const formData = new FormData()
        formData.append('image', selectedImage)

        const response = await axios.post(
            'http://localhost:5500/data/uploadImage', formData,
            { headers: { 'Content-Type': 'multipart/form-data', }}
        )
        return response
    } 
    catch (error) { throw error }
}

async function insertReport(p_report, p_uid) {
    try {
        const response = await axios.post(
            'http://localhost:5500/data/insertReport', {
                uid: p_uid,
                city: p_report.city,
                flag: p_report.flag,
                date: p_report.date,
                time: p_report.time,
                town: p_report.town,
                status: 'pending',
                calamity: p_report.calamity,
                imageLink: p_report.imageLink,
                description: p_report.description,
            },
            { headers: { 'Content-Type': 'application/json', }}
        )
        return response
    }
    catch(error) { throw error }
}
