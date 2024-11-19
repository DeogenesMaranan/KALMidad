
const popupBackground = document.getElementById('popup-container')
const addNewReportButton = document.getElementById('add-new-report-button')
const closeReportPopupButton = document.getElementById('close-report-popup')


closeReportPopupButton.addEventListener('click', () => {
    popupBackground.style.display = 'none'
})

addNewReportButton.addEventListener('click', async () => {
    try{
        const loggedInUid = sessionStorage.getItem('uid')
        const response = await getUserInfo(loggedInUid)
        
        window.location.href = '../structure/add-report.html'
    }
    catch(error) { 
        popupBackground.style.display = 'flex'
     }
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
