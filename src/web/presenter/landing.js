const openSignup = document.getElementById('register-btn');

openSignup.addEventListener('click', () => {
    const popupHolder = document.getElementById('popup-frame');
    const contentContainer = document.querySelector('.content-container');
    const popupContainer = document.querySelector('.popup-container');

    const originalDisplay = window.getComputedStyle(contentContainer).display;
    contentContainer.style.display = 'none';
    popupContainer.style.display = 'flex';
    popupHolder.src = '../structure/signup.html';

    function closePopup(event) {
        if (!event.target.closest('.popup-frame') && !event.target.closest('.register-button')) {
            contentContainer.style.display = originalDisplay;
            popupContainer.style.display = 'none';
            popupHolder.src = '';
            document.removeEventListener('click', closePopup);
        }
    }

    setTimeout(() => {
        document.addEventListener('click', closePopup);
    }, 100);
});