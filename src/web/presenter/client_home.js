document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle logic
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const menuIcon = document.getElementById("menu-icon");

        if (!sidebar || !menuIcon) return; // Ensure elements exist

        sidebar.classList.toggle("expanded");
        sidebar.classList.toggle("collapsed");

        if (sidebar.classList.contains("expanded")) {
            menuIcon.style.display = "none"; // Hide menu icon when sidebar is expanded
        } else {
            menuIcon.style.display = "block"; // Show menu icon when sidebar is collapsed
        }
    }

    // Attach event listener for sidebar toggle
    const menuIcon = document.getElementById("menu-icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleSidebar);
    }

    // Menu item event listeners for switching content
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Display content based on menu item clicked
            if (this.id === 'home') {
                showHomeContent();
            } else if (this.id === 'profile-settings') {
                showProfileSettingsContent();
            } else if (this.id === 'recent-assessments') {
                showProfileAssessmentContent();
            }
        });
    });

    // Functions to show specific content
    function showHomeContent() {
        document.getElementById("home-content").style.display = "block";
        document.getElementById("assessments-content").style.display = "none";
        document.getElementById("profile-settings-content").style.display = "none";
    }

    function showProfileSettingsContent() {
        document.getElementById("home-content").style.display = "none";
        document.getElementById("assessments-content").style.display = "none";
        document.getElementById("profile-settings-content").style.display = "block";
    }

    function showProfileAssessmentContent() {
        document.getElementById("home-content").style.display = "none";
        document.getElementById("assessments-content").style.display = "block";
        document.getElementById("profile-settings-content").style.display = "none";
        loadAssessmentData(); // Load assessment data
    }

    function loadAssessmentData() {
        const tableBody = document.querySelector("#assessments-content tbody");
        if (!tableBody) return; // Ensure table body exists

        tableBody.innerHTML = ""; // Clear existing content

        const assessmentData = [
            { image: "assets/sample_image.jpg", flag: "Catastrophic", calamity: "Typhoon", reporter: "Juan Dela Cruz", location: "Red Street, San Mateo, San Pascual, Batangas", status: "Resolved", description: "Lorem ipsum dolor sit amet..." },
            { image: "assets/sample_image.jpg", flag: "Severe", calamity: "Flood", reporter: "Maria Santos", location: "Green Street, San Juan, Batangas", status: "Ongoing", description: "Sed do eiusmod tempor..." },
        ];

        // Dynamically populate the table
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

    // User profile toggle logic
    function toggleUserProfile() {
        const profileBox = document.getElementById("user-profile-box");
        if (profileBox) {
            profileBox.classList.toggle("active");
        }
    }

    const userIcon = document.querySelector('.user-icon');
    if (userIcon) {
        userIcon.addEventListener('click', toggleUserProfile);
    }

    const signoutBtn = document.querySelector('.signout-btn');
    if (signoutBtn) {
        signoutBtn.addEventListener('click', signOut);
    }

    // Define the signOut function
    function signOut() {
        // Logic for signing out, such as clearing session or redirecting
        console.log("User signed out!");
    }

    // Automatically show Recent Assessments by default
    const recentAssessments = document.querySelector('#recent-assessments');
    if (recentAssessments) {
        recentAssessments.click();
    }

    // POPUP Logic
    const openPopupButton = document.getElementById("open-report-popup");
    const popup = document.getElementById("report-popup");
    const closePopupButton = document.getElementById("close-report-popup");

    // Check if elements exist before adding event listeners
    if (openPopupButton && popup && closePopupButton) {
        // Show the pop-up when the user clicks the 'Create new report' button
        openPopupButton.addEventListener("click", function() {
            popup.style.display = "flex";
        });

        // Close the pop-up when the 'x' (close button) is clicked
        closePopupButton.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }
});
