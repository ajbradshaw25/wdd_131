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
   const themeSelector = document.getElementById('theme-selector');
    const logo = document.getElementById('logo');
    const body = document.body;

    const blueLogoSrc = 'byui-logo_blue.webp';
    const whiteLogoSrc = 'byui-logo_white.png';

    themeSelector.addEventListener('change', (event) => {
    
    const selectedValue = event.target.value;

    if (selectedValue === 'dark') {
        // If the value is 'dark'
        body.classList.add('dark'); // Add the 'dark' class
        logo.src = whiteLogoSrc;    // Change the logo to the white version
    } else {
        // Otherwise (if the value is 'light')
        body.classList.remove('dark'); // Remove the 'dark' class
        logo.src = blueLogoSrc;        // Change the logo back to the blue version
    }
    });
  }

});