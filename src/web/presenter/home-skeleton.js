
var homeButtonClicked = false

const homeButton = document.getElementById('home')
const recentAssessmentButton = document.getElementById('recent-assessments')
const profileSettingButton = document.getElementById('profile-settings')
const pageContentContainer = document.getElementById('page-content-container')
const closedSideBarContainer = document.getElementById('closed-sidebar-container')
const openedSideBarContainer = document.getElementById('opened-sidebar-container')

homeButton.addEventListener('click', () => {
    if(!homeButtonClicked) {
        homeButtonClicked = true

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