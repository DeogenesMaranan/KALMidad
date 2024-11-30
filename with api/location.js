document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "https://psgc.cloud/api";
    const townDropdown = document.getElementById("town");
    const cityDropdown = document.getElementById("city");

    // Fetch all cities
    async function fetchCities() {
        try {
            const response = await axios.get(`${BASE_URL}/cities`);
            const cities = response.data;
            console.log('Fetched cities:', cities);  // Debugging line
            return cities; // Return all cities for now, we'll filter later
        } catch (error) {
            console.error("Error fetching cities:", error);
            return [];
        }
    }

    // Populate towns dropdown
    async function populateTowns() {
        const allCities = await fetchCities();
        const batangasCities = allCities.filter(city => city.province_name === "Batangas");

        console.log('Filtered Batangas cities:', batangasCities); // Debugging line

        // Clear existing options in the dropdown
        townDropdown.innerHTML = "<option value=''>Select Town</option>";

        // Add towns to the dropdown
        if (batangasCities.length > 0) {
            batangasCities.forEach(city => {
                const option = document.createElement("option");
                option.value = city.code;
                option.textContent = city.name;
                townDropdown.appendChild(option);
            });
        } else {
            const option = document.createElement("option");
            option.value = '';
            option.textContent = 'No towns found for Batangas';
            townDropdown.appendChild(option);
        }
    }

    // Fetch and populate barangays for a selected town
    async function populateBarangays(cityCode) {
        try {
            const response = await axios.get(`${BASE_URL}/cities/${cityCode}/barangays`);
            const barangays = response.data;

            console.log('Fetched barangays:', barangays);  // Debugging line

            // Clear existing options in the barangay dropdown
            cityDropdown.innerHTML = "<option value=''>Select Barangay</option>";

            // Add barangays to the dropdown
            if (barangays.length > 0) {
                barangays.forEach(barangay => {
                    const option = document.createElement("option");
                    option.value = barangay.code;
                    option.textContent = barangay.name;
                    cityDropdown.appendChild(option);
                });
            } else {
                const option = document.createElement("option");
                option.value = '';
                option.textContent = 'No barangays found for this town';
                cityDropdown.appendChild(option);
            }
        } catch (error) {
            console.error(`Error fetching barangays for city code ${cityCode}:`, error);
        }
    }

    // Event listener to populate barangays based on selected town
    townDropdown.addEventListener("change", () => {
        const selectedTown = townDropdown.value;
        if (selectedTown) {
            populateBarangays(selectedTown); // Fetch barangays for selected town
        } else {
            cityDropdown.innerHTML = "<option value=''>Select Barangay</option>";
        }
    });

    // Initialize dropdowns on page load
    populateTowns();
});
