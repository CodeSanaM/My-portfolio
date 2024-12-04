// Smooth scrolling for navigation links
document.querySelectorAll('.sidebar nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Smooth scrolling effect
    });
  });
});
