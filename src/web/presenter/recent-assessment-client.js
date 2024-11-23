
import {
    getAllUserReport
} from '../../services/request.js'
import { 
    capitalize,
    UsToLongDateConverter
} from '../../services/converter.js'


var uid

document.addEventListener('DOMContentLoaded', async () => {
    try{
        uid = sessionStorage.getItem('uid')
        console.log('uid', uid)
        const reponse = await getAllUserReport(uid)

        displayTabularReports(reponse.data.data)
    }
    catch(error) { 
    const mainContainer = document.querySelector('.main-container')
    const emptyTableIndicator = document.createElement('div')

    emptyTableIndicator.className = 'empty-rows'
    emptyTableIndicator.innerHTML = '<i>Your report history appears here</i>'

    mainContainer.appendChild(emptyTableIndicator)
    }
})


function displayTabularReports(reportList) {
    reportList.reverse()
    const reportTable = document.getElementById('recent-assessment-table')
                                .getElementsByTagName('tbody')[0]

    reportList.forEach((report) => {
        const newRow = reportTable.insertRow()

        const imageRow       = newRow.insertCell(0)
        const flagRow        = newRow.insertCell(1)
        const calamityRow    = newRow.insertCell(2)
        const dateRow        = newRow.insertCell(3)
        const locationRow    = newRow.insertCell(4)
        const statusRow      = newRow.insertCell(5)
        const descriptionRow = newRow.insertCell(6)

        const image = document.createElement('img')
        image.src = report.imageLink

        imageRow.appendChild(image)
        flagRow.textContent = (report.flag).toUpperCase()
        calamityRow.textContent = (report.calamity).toUpperCase()
        dateRow.textContent = UsToLongDateConverter(report.date)
        locationRow.textContent = `${report.town}, ${report.city}`
        statusRow.textContent = capitalize(report.status) 
        descriptionRow.textContent = capitalize(report.description)
    })
}