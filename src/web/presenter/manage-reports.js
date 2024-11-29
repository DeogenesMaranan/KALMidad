
import { getAllReportsSubcollection } from "../../services/request.js"


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const reportList = await getAllReportsSubcollection()
        loadReportButton(reportList.data.data)
    }
    catch(error) { console.error(error) }
})

function loadReportButton(reportList) {
    const reportsContainer = document.querySelector('.reports-container')

    reportList.forEach(report => {
        const reportImage = document.createElement('img')
        const holderReport = document.createElement('div')
        const reportButton = document.createElement('button')
        const flagIconContainer = document.createElement('div')

        reportImage.src = report.imageLink
        const flag = getFlagColor(report.flag)
        const reportDetailsContainer = displayReportDetails(report, flag)
        flagIconContainer.innerHTML = (`
            <span class="material-symbols-outlined" style="color: ${flag.color};">flag</span>
        `) 
        const hoverMenuOption = displayReportHoverOptions()
        
        reportButton.className = 'report-button'
        holderReport.className = 'holder-report'
        flagIconContainer.className = 'flag-icon-container'
        reportDetailsContainer.className = 'report-details-container'
    
        reportButton.appendChild(reportImage)
        reportButton.appendChild(reportDetailsContainer)
        reportButton.appendChild(flagIconContainer)
        holderReport.appendChild(reportButton)
        holderReport.appendChild(hoverMenuOption)
        reportsContainer.appendChild(holderReport)
    })
}

function displayReportDetails(report, flag) {
    const reportDetailsContainer = document.createElement('div')

    reportDetailsContainer.innerHTML = (`
        <p>Status: ${report.status}</p>
        <p class="flag-container" style="background-color: ${flag.color}; color: ${flag.textColor};">
            Flag: ${report.flag}
        </p>
        <p>Calamity: ${report.calamity}</p>
        <p>Date: ${report.date}</p>
        <p>Location: ${report.town}, ${report.city}</p> 
    `)

    return reportDetailsContainer
}

function displayReportHoverOptions() {
    const optionMenu = document.createElement('div')

    optionMenu.innerHTML = (`
        <div class="status-options-buttons">
            <h5>Mark as</h5>
            <button>
                <p><span class="material-symbols-outlined">task_alt</span></p>
                <p>Resolved</p>
            </button>
            <button>
                <p><span class="material-symbols-outlined">clock_loader_40</span></p>
                <p>In Progress</p>
            </button>
        </div>
    `)

    return optionMenu
}

function getFlagColor(flagLabel) {
    let flag = {}

    switch(flagLabel) {
        case 'Catastrophic': 
            flag['color'] = '#E21717'
            flag['textColor'] = 'white'
            break
        case 'Major':
            flag['color'] = '#E27C17'
            flag['textColor'] = 'white'
            break
        case 'Moderate':
            flag['color'] = '#E2E217'
            flag['textColor'] = 'black'
            break
        case 'Mild':
            flag['color'] = '#17E217'
            flag['textColor'] = 'black'
            break
    }
    return flag
}

