document.addEventListener("DOMContentLoaded", () => {
    const citySelects = document.querySelectorAll("#city-input, #city");
    const townSelects = document.querySelectorAll("#town-input, #town");

    // API endpoints
    const cityApiUrl = "https://psgc.cloud/api/provinces/0401000000/municipalities";
    const townApiUrl = "https://psgc.cloud/api/provinces/0401000000/barangays";

    // Fetch and populate dropdown
    const fetchAndPopulate = async (url, dropdowns) => {
        try {
            const response = await axios.get(url);
            const data = response.data;

            // Clear existing options and add "Not set" option
            dropdowns.forEach((dropdown) => {
                dropdown.innerHTML = '<option value="">Not set</option>';
                data.forEach((item) => {
                    const option = document.createElement("option");
                    option.value = item.code || item.id || item.name;
                    option.textContent = item.name;
                    dropdown.appendChild(option);
                });
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Populate cities and towns on dropdown focus
    citySelects.forEach((citySelect) =>
        citySelect.addEventListener("focus", () => fetchAndPopulate(cityApiUrl, citySelects))
    );

    townSelects.forEach((townSelect) =>
        townSelect.addEventListener("focus", () => fetchAndPopulate(townApiUrl, townSelects))
    );
});
