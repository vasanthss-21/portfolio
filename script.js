// Select the toggle button and dropdown menu
const toggleButton = document.querySelector('.togglebtn');
const dropdownMenu = document.querySelector('.dropdownmenu');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the 'open' class on the dropdown menu
    dropdownMenu.classList.toggle('open');
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.4, // Trigger animation when 20% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  