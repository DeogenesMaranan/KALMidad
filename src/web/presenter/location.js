const citySelects = document.querySelector("#city-input");
const townSelects = document.querySelector("#town-input");

var selectedCityId, cityIdCollection = {}
const cityApiUrl = "https://psgc.cloud/api/provinces/0401000000/municipalities";
const townApiUrl = "https://psgc.cloud/api/provinces/0401000000/barangays";


document.addEventListener('DOMContentLoaded', async () => {
    townSelects.disabled = true 

    const townList = await fetchLocation(townApiUrl)
    const cityList = await fetchLocation(cityApiUrl)

    displayLocations(townList.data, townSelects, true)
    displayLocations(cityList.data, citySelects, true)
})


async function fetchLocation(url) {
    return await axios.get(url) 
}

async function displayLocations(dataList, dropdown, isCity=false) {
    try {
        let data

        if(isCity) { data = dataList }
        else {
            data = dataList.map(item => { 
                return item.city_municipality_id == selectedCityId
                    ? item : null
            }).filter(item => item !== null);
        }

        console.log(data)

        dropdown.innerHTML = '<option value="">Not set</option>';
        for(let item of data) {
            const option = document.createElement("option");
            option.value = item.name;
            option.textContent = item.name;
            dropdown.appendChild(option);
    
            if (isCity){
                cityIdCollection[item.name] = item.id
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

citySelects.addEventListener('change', async () => {
    const city = citySelects.value;
   
    selectedCityId = cityIdCollection[city];

    const townLists = await fetchLocation(townApiUrl);
    displayLocations(townLists.data, townSelects);

    townSelects.disabled = false
});
