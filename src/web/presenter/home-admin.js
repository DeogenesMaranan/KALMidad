
import { getCount } from '../../services/request.js'

const mildCase = document.getElementById('minor-case')
const majorCase = document.getElementById('severe-case')
const moderateCase = document.getElementById('moderate-case')
const catastrophicCase = document.getElementById('catastrophic-case')
const reportTotalNumberContainer = document.getElementById('report-total-number-container')


document.addEventListener('DOMContentLoaded', async() => {
    try {
        const mildCount         = await getCount('Mild')
        const totalCount        = await getCount('ALL')
        const majorCount        = await getCount('Major')
        const moderateCount     = await getCount('Moderate')
        const catastrophicCount = await getCount('Catastrophic')

        mildCase.textContent     = mildCount.data.data
        majorCase.textContent    = majorCount.data.data
        moderateCase.textContent = moderateCount.data.data
        catastrophicCase.textContent           = catastrophicCount.data.data  
        reportTotalNumberContainer.textContent = totalCount.data.data
    }
    catch (error) {console.error(error.message) }
})