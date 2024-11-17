
const openSignin = document.getElementById('signin-header')
const openSignup = document.getElementById('register-btn')


openSignin.addEventListener('click', () => {
    const popupHolder = document.getElementById('popup-frame')

    popupHolder.src = '../structure/login.html'
    popupHolder.style.display = 'flex'
})

openSignup.addEventListener('click', () => {
    const popupHolder = document.getElementById('popup-frame')

    popupHolder.src = '../structure/signup.html'
    popupHolder.style.display = 'flex'
})
