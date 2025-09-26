function changeTheme() {
  const body = document.body;
  const html = document.documentElement; // For data-theme approach
  const themeToggle = document.getElementById('theme-toggle');

  // Using class toggling
  body.classList.toggle('dark-theme');

  // Using data-theme attribute toggling
  // const currentTheme = html.getAttribute('data-theme');
  // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  // html.setAttribute('data-theme', newTheme);

  // Optional: Save preference to localStorage
  // localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
  // localStorage.setItem('theme', newTheme);
}

// Add event listener to the toggle button
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', changeTheme);
  }

  // Optional: Load saved theme from localStorage on page load
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme === 'dark') {
  //   document.body.classList.add('dark-theme');
  //   // document.documentElement.setAttribute('data-theme', 'dark');
  // }
});