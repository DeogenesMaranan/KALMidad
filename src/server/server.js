import user from './database/user-auth.js'
import NameModel from './model/name.js'
import NameDb from './database/name.js'

const signUp = document.getElementById('signup')
const signIn = document.getElementById('signin')
const signOut = document.getElementById('signout')
const add_name = document.getElementById('add-name')


signUp.addEventListener('click', () => {
    event.preventDefault()

    const p_email = document.getElementById('email').value
    const p_password = document.getElementById('password').value

    user.signup(p_email, p_password)
        .then((userCredential) => {
            console.log(userCredential.email)  
        }).catch((error) => {
            console.error(error.message)
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
            console.error(error.message)
        })
})

signOut.addEventListener('click', () => {
    event.preventDefault()
    
    user.signout()
        .then((confirmation) => {
            console.log(confirmation)
        }).catch((error) => {
            console.error(error)
        })
})

add_name.addEventListener('click', () => {
    event.preventDefault()

    let name = new NameModel()
    name.lastname = document.getElementById('add_lname').value
    name.firstname = document.getElementById('add_fname').value
    name.middlename = document.getElementById('add_mname').value

    NameDb.insertName(name)
        .then((confirmation) => {
            console.log(confirmation)
        }).catch((error) => {
            console.error(error)
        })
})
