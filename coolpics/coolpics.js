const menuButton = document.querySelector('#menuButton');
const menuLinks = document.querySelector('#menuLinks');

function toggleMenu() {
    // 1. Toggle the 'hide' class on the menu links list
    const menu = document.querySelector(".menu")
    menuLinks.classList.toggle('hide');

    // 2. (Accessibility improvement) Update the aria-expanded attribute
    //    The attribute should reflect whether the menu is currently visible (true) or hidden (false)
    const isExpanded = menuLinks.classList.contains('hide') ? 'false' : 'true';
    menuButton.setAttribute('aria-expanded', isExpanded);
}

menuButton.addEventListener('click', toggleMenu);