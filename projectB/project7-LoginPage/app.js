const showPopupButton = document.getElementById('showPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupContainer = document.getElementById('popupContainer');

// Show the popup when the button is clicked
showPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    title.textContent = 'Rely SignUp'; 
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    title.textContent = 'Rely Login';
});

// Close the popup if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
        title.textContent = 'Rely Login';
    }
});
