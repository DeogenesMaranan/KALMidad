
import { getCount } from '../../services/request.js'

const reportTotalNumberContainer = document.getElementById('report-total-number-container')

document.addEventListener('DOMContentLoaded', async() => {
    try {
        const totalCount = await getCount('ALL')
        
        reportTotalNumberContainer.textContent = totalCount.data.data
    }
    catch (error) {console.error(error.message) }
})