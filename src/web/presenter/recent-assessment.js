
import {
    getAllUserReport,
    getAllReportsSubcollection
} from '../../services/request.js'
import { 
    capitalize,
    UsToLongDateConverter
} from '../../services/converter.js'


var uid, userType

document.addEventListener('DOMContentLoaded', async () => {
    userType = sessionStorage.getItem('userType')
    
    try{
        if (userType === 'client') {
            uid = sessionStorage.getItem('uid')
            const reponse = await getAllUserReport(uid)
            displayTabularReports(reponse.data.data)
        }
        else if (userType === 'admin') {
            const response = await getAllReportsSubcollection()
            const userData = response.data.data
            
            displayTabularReportsAdmin(userData)
        }
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
        flagRow.textContent        = (report.flag).toUpperCase()
        calamityRow.textContent    = (report.calamity).toUpperCase()
        dateRow.textContent        = UsToLongDateConverter(report.date)
        locationRow.textContent    = `${report.town}, ${report.city}`
        statusRow.textContent      = capitalize(report.status) 
        descriptionRow.textContent = capitalize(report.description)
    })
}

function displayTabularReportsAdmin(reportList) {
    document.getElementById('name-row').textContent = 'Report From'
    const reportTable = document.getElementById('recent-assessment-table')
                                .getElementsByTagName('tbody')[0]

    reportList.forEach((report) => {
        const newRow = reportTable.insertRow()

        const imageRow       = newRow.insertCell(0)
        const flagRow        = newRow.insertCell(1)
        const calamityRow    = newRow.insertCell(2)
        const nameRow        = newRow.insertCell(3)
        const locationRow    = newRow.insertCell(4)
        const statusRow      = newRow.insertCell(5)
        const descriptionRow = newRow.insertCell(6)

        const image = document.createElement('img')
        image.src = report.imageLink

        // const statusOption = ['Pending', 'In Process', 'Resolved']
        // const statusSelect = document.createElement('select')
        // statusSelect.id = 'status-select'

        // statusOption.forEach((option) => {
        //     const selectOpt = document.createElement('option')
        //     selectOpt.textContent = option
        //     selectOpt.value = option

        //     statusSelect.appendChild(selectOpt)
        // })

        imageRow.appendChild(image)
        // statusRow.appendChild(statusSelect)
        
        flagRow.textContent = report.flag
        statusRow.textContent = capitalize(report.status)
        // statusSelect.value = capitalize(report.status)
        calamityRow.textContent = capitalize(report.calamity)
        locationRow.textContent = `${report.town}, ${report.city}`
        descriptionRow.textContent = capitalize(report.description)
        nameRow.textContent = `${report.firstname} ${report.middlename[0]}. ${report.lastname}`
    })
}