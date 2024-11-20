
import axios from 'axios'
import ReportModel from '../../model/report-details.js'

var selectedImage
const addReportButton = document.getElementById('submit-report-button')
const imageFileSelector = document.getElementById('image-file-selector')


addReportButton.addEventListener('click', async () => {
    try {
        const p_report = getUserInput()
        const image = await uploadImage(selectedImage)
        p_report.imageLink = image.data.data
        console.log(p_report.imageLink)
        // After this get the image's severity 
        // post to db

    } 
    catch(error) { console.error(error) }
})

imageFileSelector.addEventListener('change', (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
        selectedImage = file
        console.log('Selected image:', selectedImage)
    } else {
        console.error('Invalid file. Please select an image.')
    }
})

function getUserInput() {
    const newReport = new ReportModel()

    newReport.imageLink = selectedImage
    newReport.date = document.getElementById('date-input').value
    newReport.time = document.getElementById('time-input').value 
    newReport.city = document.getElementById('city-dropdown').value
    newReport.town = document.getElementById('town-dropdown').value
    newReport.lastname = document.getElementById('lastname-input').value 
    newReport.firstname = document.getElementById('firstname-input').value 
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
