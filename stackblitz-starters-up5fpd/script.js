// This script adds smooth scrolling to the navigation links in the sidebar.

// Select all the navigation links inside the sidebar and loop through each one.
document.querySelectorAll('.sidebar nav a').forEach(anchor => {
  // Add an event listener to each link for the 'click' event.
  anchor.addEventListener('click', function (e) {
    // Prevent the default action of the link (jumping directly to the section).
    e.preventDefault();

    // Use 'getAttribute' to get the href value of the clicked link (e.g., #about, #projects).
    // Then find the section on the page that matches this ID.
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth' // Enable the smooth scrolling effect to the target section.
    });
  });
});
