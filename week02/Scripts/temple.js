// Footer: Set current year and last modified date
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  if (modifiedSpan) {
    const lastModified = document.lastModified;
    modifiedSpan.textContent = lastModified;
  }

  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.querySelector("nav ul");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      hamburgerBtn.textContent =
        navMenu.classList.contains("open") ? "✖" : "☰";
    });
  }
});
