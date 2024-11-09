import user from './database/user.js'


const signUp = document.getElementById('signup')
const signIn = document.getElementById('signin')
const signOut = document.getElementById('signout')

signUp.addEventListener('click', () => {
    event.preventDefault()

    const p_email = document.getElementById('email').value
    const p_password = document.getElementById('password').value

    user.signup(p_email, p_password)
        .then((userCredential) => {
            console.log(userCredential.email)
            
        }).catch((error) => {
            console.log(error.message)
        })
})

signIn.addEventListener('click', () => {
    event.preventDefault()

    const p_email = document.getElementById('in_email').value
    const p_password = document.getElementById('in_password').value

    user.signin(p_email, p_password)
        .then((userCredential) => {
            console.log(`Login successful. ID: ${userCredential.uid} email: ${userCredential.email}`)
        }).catch((error) => {
            console.log(error.message)
        })
})

signOut.addEventListener('click', () => {
    event.preventDefault()
    
    user.signout()
        .then((confirmation) => {
            console.log(confirmation)
        }).catch((error) => {
            console.log(error)
        })
})