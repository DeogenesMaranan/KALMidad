
const popupBackground = document.getElementById('popup-container')
const addNewReportButton = document.getElementById('add-new-report-button')
const closeReportPopupButton = document.getElementById('close-report-popup')


closeReportPopupButton.addEventListener('click', () => {
    popupBackground.style.display = 'none'
})

addNewReportButton.addEventListener('click', () => {
    // if the user was new, show the setup account page.
    const loggedInUid = sessionStorage.getItem('uid')
    


    // else, continue to the add report page.
})

async function getUserInfo(p_uid) {
    try {
        const response = await axios.get(
            'http://localhost:5500/users/getUserInfoById', {
                params: {
                    document: 'users-credential',
                    uid: p_uid,
                },
                headers: { 'Content-Type': 'application/json' },
            }
        )
        return response
    } catch(error) { throw error }
}
