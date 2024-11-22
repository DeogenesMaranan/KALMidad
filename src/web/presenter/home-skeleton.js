
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


onContentContainer()
function onContentContainer() {
    const userType = sessionStorage.getItem('userType')

    if(userType === 'client'){
        pageContentContainer.src = '../structure/home-client.html'
    } else {
        pageContentContainer.src = ''
    }
    // pageContentContainer.src = '../structure/home-admin.html'
}

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

        pageContentContainer.src = '../structure/home-client.html'
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

        pageContentContainer.src = '../structure/recent-assessment.html'
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

        // pageContentContainer.src = '../structure/.html'
    } else {
        profileSettingButton = false
        openedSideBarContainer.style.display = 'none'
        closedSideBarContainer.style.display = 'flex'
    }
})

signoutButton.addEventListener('click', async () => {
    window.location.replace('./landing.html')
})