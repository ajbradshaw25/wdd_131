function changeTheme() {
  const body = document.body;
  const html = document.documentElement; // For data-theme approach
  const themeToggle = document.getElementById('theme-toggle').value;
  
    

  // Using class toggling
  body.classList.toggle('dark-theme');

  const img = document.querySelector('img');

    if (themeToggle === 'dark') {
        img.src = './byui-logo_white.png';
    } else {
        img.src = './byui-logo_blue.webp';
    }

  // Using data-theme attribute toggling
  // const currentTheme = html.getAttribute('data-theme');
  // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  // html.setAttribute('data-theme', newTheme);

  // Optional: Save preference to localStorage
  // localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
  // localStorage.setItem('theme', newTheme);
}
