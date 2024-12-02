
import { getCount, getAllReportsSubcollection } from '../../services/request.js'

const mildCase = document.getElementById('minor-case')
const majorCase = document.getElementById('severe-case')
const moderateCase = document.getElementById('moderate-case')
const catastrophicCase = document.getElementById('catastrophic-case')
const topCitiesListContainer = document.querySelector('.top-cities-list-container')
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

        const response = await getAllReportsSubcollection()
        const citiesWithMostReports = getTopCities(response.data.data)
        
        displayTopCities(citiesWithMostReports, citiesWithMostReports.length)
    }
    catch (error) {console.error(error.message) }
})

function displayTopCities(dataList, num) {
    const number = num < 5? num : 5
    
    for(let idx = 0; idx < number; idx++) {
        const cityInfoContainer = document.createElement('div')
        const cityLabel = document.createElement('p')
        const countLabel = document.createElement('p')

        cityLabel.textContent = dataList[idx].item
        countLabel.textContent = dataList[idx].frequency

        cityInfoContainer.className = idx%2 === 1
                                    ? 'city-info-container first'
                                    : 'city-info-container second'
        cityInfoContainer.appendChild(cityLabel)
        cityInfoContainer.appendChild(countLabel)

        topCitiesListContainer.appendChild(cityInfoContainer)
    }
}

function getTopCities(dataList) {
    const frequencyMap = {};

    dataList.forEach((data) => {
        frequencyMap[data.city] = (frequencyMap[data.city] || 0) + 1
    })

    const frequencyArray = Object.entries(frequencyMap)
    frequencyArray.sort((a, b) => b[1] - a[1])

    return frequencyArray.map(([item, frequency]) => ({ item, frequency }))
}