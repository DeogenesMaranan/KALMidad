

const citySelects = document.querySelector("#city-input");
const townSelects = document.querySelector("#town-input");

var selectedCityId, townLists, cityIdCollection = {}
const cityApiUrl = "https://psgc.cloud/api/provinces/0401000000/municipalities";
const townApiUrl = "https://psgc.cloud/api/provinces/0401000000/barangays";


document.addEventListener('DOMContentLoaded', async () => {
    townSelects.disabled = true 

    const towns = await fetchLocation(townApiUrl)
    townLists = towns.data

    const cityList = await fetchLocation(cityApiUrl)
    displayLocations(cityList.data, citySelects, true)
})

async function fetchLocation(url) {
    return await axios.get(url) 
}

function displayLocations(data, dropdown, isCity=false) {
    try {
        dropdown.innerHTML = '<option value="">Not set</option>'
        for(let item of data) {
            const option = document.createElement("option")
            option.value = item.name
            option.textContent = item.name
            dropdown.appendChild(option)
    
            if (isCity){
                cityIdCollection[item.name] = item.id
            }
        }
        setInitLocationValue(isCity)
        
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

citySelects.addEventListener('change', () => {
    console.log('change');
    const city = citySelects.value
   
    selectedCityId = cityIdCollection[city]

    const data = townLists.map(item => { 
        return item.city_municipality_id == selectedCityId
            ? item : null
    }).filter(item => item !== null)
   
    displayLocations(data, townSelects)
})

function setInitLocationValue(isCity){
    if(isCity) {
        const selectedCity = sessionStorage.getItem('city')
        const city = selectedCity == null? '' : selectedCity
        citySelects.value = city

        const change = new Event('change')
        citySelects.dispatchEvent(change)
    } 
    else {
        const town = sessionStorage.getItem('town')

        if (town != null) {
            townSelects.value = town
        } else {
            townSelects.disabled = false
        }
    }
}