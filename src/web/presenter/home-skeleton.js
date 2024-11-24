
var userType
var homeButtonClicked = true
var recentAssessmentButtonClicked= false
var profileSettingButtonClicked = false

const homeButton = document.getElementById('home')
const signoutButton = document.getElementById('signout-button')
const openSidebarButton = document.getElementById('open-sidebar-button')
const recentAssessmentButton = document.getElementById('recent-assessments')
const profileSettingButton = document.getElementById('profile-settings')
const pageContentContainer = document.getElementById('page-content-container')
const closedSideBarContainer = document.getElementById('closed-sidebar-container')
const openedSideBarContainer = document.getElementById('opened-sidebar-container')


document.addEventListener('DOMContentLoaded', () => {
    userType = sessionStorage.getItem('userType')
    openHomeBasedOnUserType(userType)
}) 

openSidebarButton.addEventListener('click', () => {
    closedSideBarContainer.style.display = 'none'
    openedSideBarContainer.style.display = 'flex'
})

homeButton.addEventListener('click', () => {
    if (!homeButtonClicked) {
        homeButtonClicked = true
        recentAssessmentButtonClicked = false
        profileSettingButtonClicked = false

        homeButton.style.backgroundColor = '#44BBA4'
        recentAssessmentButton.style.backgroundColor = '#393E41'
        profileSettingButton.style.backgroundColor = '#393E41'

        openHomeBasedOnUserType(userType)
    } else {
        homeButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

recentAssessmentButton.addEventListener('click', () => {
    if (!recentAssessmentButtonClicked) {
        homeButtonClicked = false
        recentAssessmentButtonClicked = true
        profileSettingButtonClicked = false

        homeButton.style.backgroundColor = '#393E41'
        recentAssessmentButton.style.backgroundColor = '#44BBA4'
        profileSettingButton.style.backgroundColor = '#393E41'

        openAssessmentBasedOnUserType(userType)
    } else {
        recentAssessmentButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

profileSettingButton.addEventListener('click', () => {
    if (!profileSettingButtonClicked) {
        homeButtonClicked = false
        recentAssessmentButtonClicked = false
        profileSettingButtonClicked = true

        homeButton.style.backgroundColor = '#393E41'
        recentAssessmentButton.style.backgroundColor = '#393E41'
        profileSettingButton.style.backgroundColor = '#44BBA4'

        pageContentContainer.src = '../structure/user-profile.html'
    } else {
        profileSettingButtonClicked = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
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

function openAssessmentBasedOnUserType(userType) {
    if(userType === 'client') {
        pageContentContainer.src = '../structure/recent-assessment-client.html'
    }
    else {
        pageContentContainer.src = ''
    }
}
