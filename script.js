document.getElementById("followUs").addEventListener("click", function () {
  window.location.href = "https://www.tiktok.com/@4ourblock"; // Replace with your TikTok profile link
});

document.getElementById("seeUs").addEventListener("click", function () {
  window.location.href = "#portfolio"; // Navigates to the Social Media section
});

// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Loop through each link and add a click event
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox to close the menu
    document.getElementById("check").checked = false;
  });
});

// Select all sections
const sections = document.querySelectorAll(".section");

// Create intersection observer to detect when a section enters the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If the section is in the viewport, add the 'show' class
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1, // Trigger the animation when 10% of the section is visible
  }
);

// Apply the observer to each section
sections.forEach((section) => {
  observer.observe(section);
});
