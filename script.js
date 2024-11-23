const toggleButton = document.querySelector('.togglebtn');
const dropdownMenu = document.querySelector('.dropdownmenu');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  