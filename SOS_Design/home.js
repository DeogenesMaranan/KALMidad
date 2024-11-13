document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle logic
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const menuIcon = document.getElementById("menu-icon");

        // Toggle the expanded class on the sidebar
        sidebar.classList.toggle("expanded");

        // Toggle the visibility of the menu icon (hide it when sidebar expands)
        if (sidebar.classList.contains("expanded")) {
            menuIcon.style.display = "none"; // Hide the menu icon
        } else {
            menuIcon.style.display = "block"; // Show the menu icon
        }
    }

    // Add event listeners to menu items for active state
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            this.classList.add('active');
        });
    });

    // Attach the toggleSidebar function to the menu icon click event
    document.getElementById("menu-icon").addEventListener("click", toggleSidebar);
});
