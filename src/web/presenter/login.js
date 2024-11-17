
const signinButton = document.getElementById('signin-button')

signinButton.addEventListener('click', () => {
    const p_emal = document.getElementById('signin-email').value 
    const p_password = document.getElementById('signin-password').value

    console.log(`Email: ${p_emal} Password: ${p_password}`)
})