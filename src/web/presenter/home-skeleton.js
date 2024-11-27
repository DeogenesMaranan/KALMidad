
var userType
var homeButtonClicked = true
var recentAssessmentButtonClicked= false
var profileSettingButtonClicked = false
var manageReportsButtonClicked = false

const homeButton = document.getElementById('home')
const signoutButton = document.getElementById('signout-button')
const manageReportsButton = document.getElementById('manage-reports')
const profileSettingButton = document.getElementById('profile-settings')
const openSidebarButton = document.getElementById('open-sidebar-button')
const recentAssessmentButton = document.getElementById('recent-assessments')
const pageContentContainer = document.getElementById('page-content-container')
const closedSideBarContainer = document.getElementById('closed-sidebar-container')
const openedSideBarContainer = document.getElementById('opened-sidebar-container')


document.addEventListener('DOMContentLoaded', () => {
    userType = sessionStorage.getItem('userType')
    openHomeBasedOnUserType(userType)

    if (userType === 'admin') {
        manageReportsButton.style.display = 'flex'
    }
}) 

openSidebarButton.addEventListener('click', () => {
    closedSideBarContainer.style.display = 'none'
    openedSideBarContainer.style.display = 'flex'
})

homeButton.addEventListener('click', () => {
    if (!homeButtonClicked) {
        setActiveButton('HOME')

        openHomeBasedOnUserType(userType)
    } else {
        homeButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

recentAssessmentButton.addEventListener('click', () => {
    if (!recentAssessmentButtonClicked) {
        setActiveButton('ASSESSMENT')

        //  sessionStorage.setItem('userType', userType)
        pageContentContainer.src = '../structure/recent-assessment.html'
    } else {
        recentAssessmentButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

profileSettingButton.addEventListener('click', () => {
    if (!profileSettingButtonClicked) {
        setActiveButton('PROFILE')

        pageContentContainer.src = '../structure/user-profile.html'
    } else {
        profileSettingButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

manageReportsButton.addEventListener('click', () => {
    if(!manageReportsButtonClicked) {
        setActiveButton('REPORTS')
    }
})

signoutButton.addEventListener('click', async () => {
    sessionStorage.clear()
    window.location.replace('./landing.html')
})

function openHomeBasedOnUserType(userType) {
    if(userType === 'client'){
        pageContentContainer.src = '../structure/home-client.html'
    } else {
        pageContentContainer.src = '../structure/home-admin.html'
    }
}

function setActiveButton(activeButton) {

    homeButtonClicked = false
    recentAssessmentButtonClicked = false
    profileSettingButtonClicked = false
    manageReportsButtonClicked = false

    homeButton.style.backgroundColor = '#393E41'
    recentAssessmentButton.style.backgroundColor = '#393E41'
    profileSettingButton.style.backgroundColor = '#393E41'
    manageReportsButton.style.backgroundColor = '#393E41'


    switch (activeButton) {
        case 'HOME':
            homeButtonClicked = true
            homeButton.style.backgroundColor = '#44BBA4'
            break
        case 'ASSESSMENT':
            recentAssessmentButtonClicked = true
            recentAssessmentButton.style.backgroundColor = '#44BBA4'
            break
        case 'PROFILE':
            profileSettingButtonClicked = true
            profileSettingButton.style.backgroundColor = '#44BBA4'
            break
        case 'REPORTS':
            manageReportsButtonClicked = true
            manageReportsButton.style.backgroundColor = '#44BBA4'
    }
}