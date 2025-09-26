function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    changeTheme(savedTheme);
    document.getElementById('theme-selector').value = savedTheme; // Set dropdown to saved theme
  } else {
    // Optional: Set a default theme if no preference is saved
    changeTheme('light'); // Or 'dark'
    document.getElementById('theme-selector').value = 'light';
  }
});