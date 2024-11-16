document.addEventListener('DOMContentLoaded', function() {
    // Helper function to toggle modal visibility
    function toggleModal(openModalId, closeModalId) {
        document.getElementById(openModalId).style.display = 'flex';
        document.getElementById(closeModalId).style.display = 'none';
    }

    // Show Register Modal when Register button (from header or Register modal) is clicked
    document.getElementById('register-btn').addEventListener('click', function() {
        toggleModal('register-modal', 'signin-modal');
    });

    // Show Signin Modal when Signin link in the header is clicked
    document.getElementById('signin-header').addEventListener('click', function() {
        toggleModal('signin-modal', 'register-modal');
    });

    // Show Signin Modal when "Signin" link inside the Register Modal is clicked
    document.getElementById('signin-inside').addEventListener('click', function() {
        toggleModal('signin-modal', 'register-modal');
    });

    // Show Register Modal when "Sign up" link inside the Signin Modal is clicked
    document.getElementById('signup-inside').addEventListener('click', function() {
        toggleModal('register-modal', 'signin-modal');
    });

    // Optional: Close the modal if the user clicks anywhere outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('register-modal')) {
            document.getElementById('register-modal').style.display = 'none';
        } else if (event.target === document.getElementById('signin-modal')) {
            document.getElementById('signin-modal').style.display = 'none';
        }
    });

    // Password visibility toggle
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        //const eyeIcon = document.getElementById('toggle-password'); di pa tapos hehe 
        
        // Toggle password visibility
        if (passwordField.type === 'password') {
            passwordField.type = 'text'; // Show password
            //eyeIcon.innerHTML = '&#128064;'; // Change to 'closed eye' icon
        } else {
            passwordField.type = 'password'; // Hide password
            //eyeIcon.innerHTML = '&#128065;'; // Change to 'open eye' icon
        }
    });
});
