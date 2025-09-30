document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("open");
  });
});