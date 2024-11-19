// Select the toggle button and dropdown menu
const toggleButton = document.querySelector('.togglebtn');
const dropdownMenu = document.querySelector('.dropdownmenu');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the 'open' class on the dropdown menu
    dropdownMenu.classList.toggle('open');
});
