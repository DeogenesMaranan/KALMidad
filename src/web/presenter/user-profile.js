
import {
    getUserInfo,
    updateUserInfo
} from '../../services/request.js'

var uid, email
var editCount = 0, changeCount = 0

const signoutButton       = document.getElementById('signout-button')
const editNameButton      = document.getElementById('edit-name-button')
const changeAddressButton = document.getElementById('change-address-button')
const firstnameInput      = document.getElementById('firstname-input')
const middlenameInput     = document.getElementById('middlename-input')
const lastnameInput       = document.getElementById('lastname-input')
const emailInput          = document.getElementById('email-input')
const townInput           = document.getElementById('town-input')
const cityInput           = document.getElementById('city-input')


document.addEventListener('DOMContentLoaded', async () => {
    try {
        uid = sessionStorage.getItem('uid')
        email = sessionStorage.getItem('email')

        const response = await getUserInfo(uid)
        displayUserInfo(response.data, email)
    }
    catch (error) { console.error('Error:', error)}
})

signoutButton.addEventListener('click', () => {
    sessionStorage.clear()
    history.replaceState(null, null, './landing.html')
    window.top.location.replace('./landing.html')
})

editNameButton.addEventListener('click', async () => {
    try {
        editCount++

        if (editCount < 2) {
            enableNameInput(true)
            editNameButton.textContent = 'Save'
            firstnameInput.focus()
        }
        else {
            const firstname = firstnameInput.value
            const middlename = middlenameInput.value
            const lastname = lastnameInput.value

            const fields = { uid, firstname, middlename, lastname }
            await updateUserInfo(fields)

            editCount = 0
            enableNameInput(false)
            editNameButton.textContent = 'Edit Name'
        }
    }
    catch(error) { console.error(error) }
})

changeAddressButton.addEventListener('click', async () => {
    try {
        changeCount++

        if(changeCount < 2) {
            enableAddressInput(true)
            changeAddressButton.textContent = 'Save'
            townInput.focus()
        }
        else {
            const town = townInput.value
            const city = cityInput.value
            
            const fields = { uid, town, city }
            await updateUserInfo(fields)

            changeCount = 0
            enableAddressInput(false)
            changeAddressButton.textContent = 'Change Address'
        }
    }
    catch (error) { console.error(error) }
})


function enableNameInput(enable) {
    firstnameInput.disabled = !enable
    middlenameInput.disabled = !enable
    lastnameInput.disabled = !enable 
}

function enableAddressInput(enable) {
    townInput.disabled = !enable
    cityInput.disabled = !enable
}

function displayUserInfo(userData, email) {
    firstnameInput.value = userData.firstname
    middlenameInput.value = userData.middlename
    lastnameInput.value = userData.lastname

    
    cityInput.value = userData.city 
    const changeEvent = new Event('change');
    cityInput.dispatchEvent(changeEvent)

    townInput.addEventListener('optionsLoaded', () => {
        townInput.value = userData.town
        townInput.disabled = true
    })

    emailInput.value = email 
}