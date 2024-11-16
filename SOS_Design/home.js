document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle logic
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const menuIcon = document.getElementById("menu-icon");

        // Toggle the expanded/collapsed state of the sidebar
        sidebar.classList.toggle("expanded");
        sidebar.classList.toggle("collapsed");

        // Toggle the visibility of the menu icon (hide it when sidebar expands)
        if (sidebar.classList.contains("expanded")) {
            menuIcon.style.display = "none"; // Hide the menu icon when sidebar is expanded
        } else {
            menuIcon.style.display = "block"; // Show the menu icon when sidebar is collapsed
        }
    }

    // Add event listeners to menu items for active state and content switching
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            this.classList.add('active');
            
            // Show corresponding content based on the menu item clicked
            if (this.id === 'home') {
                showHomeContent();
            } else if (this.id === 'profile-settings') {
                showProfileSettingsContent();
            } else if (this.id === 'recent-assessments') {
                showProfileAssessmentContent();
            }
        });
    });

    // Function to show Home content and hide other content
    function showHomeContent() {
        document.getElementById("home-content").style.display = "block";
        document.getElementById("assessments-content").style.display = "none";
        document.getElementById("profile-settings-content").style.display = "none";
    }

    // Function to show Profile Settings content and hide other content
    function showProfileSettingsContent() {
        document.getElementById("home-content").style.display = "none";
        document.getElementById("assessments-content").style.display = "none";
        document.getElementById("profile-settings-content").style.display = "block";
    }

    // Function to show Recent Assessments content and hide other content
    function showProfileAssessmentContent() {
        document.getElementById("home-content").style.display = "none";
        document.getElementById("assessments-content").style.display = "block"; // Show the assessments content
        document.getElementById("profile-settings-content").style.display = "none";
        loadAssessmentData(); // Load data into assessments table
    }

    // Function to dynamically load data into the assessments table
    function loadAssessmentData() {
        const tableBody = document.querySelector("#assessments-content tbody");

        // Clear any existing rows
        tableBody.innerHTML = "";

        // Example data to populate the table
        const assessmentData = [
            { image: "assets/sample_image.jpg", flag: "Catastrophic", calamity: "Typhoon", reporter: "Juan Dela Cruz", location: "Red Street, San Mateo, San Pascual, Batangas", status: "Resolved", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
            { image: "assets/sample_image.jpg", flag: "Severe", calamity: "Flood", reporter: "Maria Santos", location: "Green Street, San Juan, Batangas", status: "Ongoing", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." },
            // Add more rows as needed
        ];

        // Populate the table with data
        assessmentData.forEach(data => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${data.image}" alt="Report Image" class="report-image"></td>
                <td>${data.flag}</td>
                <td>${data.calamity}</td>
                <td>${data.reporter}</td>
                <td>${data.location}</td>
                <td>${data.status}</td>
                <td>${data.description}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Attach the toggleSidebar function to the menu icon click event
    document.getElementById("menu-icon").addEventListener("click", toggleSidebar);

    // User profile toggle logic
    function toggleUserProfile() {
        const profileBox = document.getElementById("user-profile-box");
        profileBox.classList.toggle("active"); // Toggle the visibility of the profile box
    }

    // Attach the toggleUserProfile function to the user icon click event
    document.querySelector('.user-icon').addEventListener('click', toggleUserProfile);

    // Attach sign-out functionality to the sign-out button
    document.querySelector('.signout-btn').addEventListener('click', signOut);

    // Initial state: Show Recent Assessments content by default
    document.querySelector('#recent-assessments').click();  // Automatically click on "Recent Assessments" to show content
});
