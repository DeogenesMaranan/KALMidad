import { getAllReportsSubcollection } from "../../services/request.js"
import { updateReportStatus } from "../../services/request.js"

const reportsContainer = document.querySelector('.reports-container')

document.addEventListener('DOMContentLoaded', async () => {
    const loadingScreen = document.getElementById('loading-screen');
    try {
        const reportList = await getAllReportsSubcollection()
        loadReportButton(reportList.data.data)
    }
    catch(error) { console.error(error) }
    finally {
        loadingScreen.style.display = 'none';
    }
})

reportsContainer.addEventListener('click', (e) => {
    if (e.target.closest('#resolved-button')) {
        handleResolve(e)
    } 
    else if (e.target.closest('#in-progress-button')) {
        handleInProgress(e)
    }
})

async function handleResolve(e) {
    try {
        const reportHolder = e.target.closest('.holder-report')
        const reportId = reportHolder.getAttribute('data-id')
        const uid = reportHolder.getAttribute('uid')

        await updateReportStatus(uid, reportId, 'Resolved')
        reportHolder.querySelector('.status-holder').textContent = 'Status: Resolved'
        
        const resolvedButton = reportHolder.querySelector('#resolved-button')
        if (resolvedButton) {
            resolvedButton.remove()
        }
        const optionsMenu = reportHolder.querySelector('.status-options-buttons')
        if (!optionsMenu.querySelector('#in-progress-button')) {
            optionsMenu.innerHTML += `
                <button id="in-progress-button">
                    <p><span class="material-symbols-outlined">clock_loader_40</span></p>
                    <p>In Progress</p>
                </button>
            `
        }
    }
    catch (error) { console.error(error) }
}

async function handleInProgress(e) {
    try {
        const reportHolder = e.target.closest('.holder-report')
        const reportId = reportHolder.getAttribute('data-id')
        const uid = reportHolder.getAttribute('uid')

        await updateReportStatus(uid, reportId, 'In Process')
        reportHolder.querySelector('.status-holder').textContent = 'Status: In Process'
        
        const inProgressButton = reportHolder.querySelector('#in-progress-button')
        if (inProgressButton) {
            inProgressButton.remove()
        }
        const optionsMenu = reportHolder.querySelector('.status-options-buttons')
        if (!optionsMenu.querySelector('#resolved-button')) {
            optionsMenu.innerHTML += `
                <button id="resolved-button">
                    <p><span class="material-symbols-outlined">task_alt</span></p>
                    <p>Resolved</p>
                </button>
            `
        }
    }
    catch (error) { console.error(error) }
}

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
        const hoverMenuOption = displayReportHoverOptions(report.status)
        
        reportButton.className = 'report-button'
        holderReport.className = 'holder-report'
        flagIconContainer.className = 'flag-icon-container'
        reportDetailsContainer.className = 'report-details-container'
        
        holderReport.setAttribute('uid', report.uid)
        holderReport.setAttribute('data-id', report.id)

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
        <p class="status-holder">Status: ${report.status}</p>
        <p class="flag-container" style="background-color: ${flag.color}; color: ${flag.textColor};">
            Flag: ${report.flag}
        </p>
        <p>Calamity: ${report.calamity}</p>
        <p>Date: ${report.date}</p>
        <p>Location: ${report.town}, ${report.city}</p> 
    `)

    return reportDetailsContainer
}

function displayReportHoverOptions(reportStatus) {
    const optionMenu = document.createElement('div')

    let buttonsHTML = `
        <div class="status-options-buttons">
            <h5>Mark as</h5>
    `;
    
    if (reportStatus !== 'Resolved') {
        buttonsHTML += `
            <button id="resolved-button">
                <p><span class="material-symbols-outlined">task_alt</span></p>
                <p>Resolved</p>
            </button>
        `;
    }
    
    if (reportStatus !== 'In Process') {
        buttonsHTML += `
            <button id="in-progress-button">
                <p><span class="material-symbols-outlined">clock_loader_40</span></p>
                <p>In Progress</p>
            </button>
        `;
    }
    
    buttonsHTML += `</div>`;

    optionMenu.innerHTML = buttonsHTML;
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