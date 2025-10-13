const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const breakpoint = 1000; // Matches the CSS media query breakpoint

function toggleMenu() {
    // 1. Toggle the 'hide' class on the menu links list
    menu.classList.toggle('hide');
}

menuButton.addEventListener("click", toggleMenu)
// 02. Function to manage menu visibility on window resize
function handleResize() {
  // If the screen width is greater than the breakpoint (1000px)
  if (window.innerWidth > breakpoint) {
    // Remove the 'hide' class to ensure the horizontal menu is visible
    menu.classList.remove("hide");
  } else {
    // If the screen is small, add the 'hide' class (unless the user has toggled it open)
    // NOTE: For better UX, you might check if the menu is already open before adding 'hide', 
    // but the instructions ask to simply add it. The CSS will manage visibility.
    menu.classList.add("hide");
  }
}

// Event listeners
window.addEventListener("resize", handleResize);

// Initial call to set the menu state on page load
handleResize(); 


// --- Part 2: 03 & 04: Image Viewer Modal ---

// 1. Target the gallery container
const gallery = document.querySelector('.gallery');

// Function to handle showing the image viewer when a gallery image is clicked
function showImageViewer(event) {
  // Use event delegation to find the closest <img> ancestor of the clicked element
  const clickedImage = event.target.closest('img');

  if (clickedImage) {
    const smallSrc = clickedImage.getAttribute('src');
    const altText = clickedImage.getAttribute('alt');

    // 1. Get the base name from 'norris-sm.jpeg' -> 'norris'
    // This splits the string at the '-', takes the first part (index [0]), and discards the rest.
    const baseName = smallSrc.split('-')[0];
    
    // 2. Construct the full-size image source: 'norris' + '-full.jpeg' -> 'norris-full.jpeg'
    const fullSrc = baseName + '-full.jpeg';

    // *** Create and populate the dialog element ***
    const dialog = document.createElement('dialog');
    
    // Set the innerHTML for the image and close button
    dialog.innerHTML = `
      <img src="${fullSrc}" alt="${altText}">
      <button class='close-viewer' aria-label="Close Image Viewer">X</button>
    `;

    // Append the dialog to the body (or any appropriate container)
    document.body.appendChild(dialog); 
    
    // Show the modal
    dialog.showModal();

    // *** Close Button Listener ***
    const closeButton = dialog.querySelector('.close-viewer');
    closeButton.addEventListener('click', () => {
        dialog.close();
    });

    // *** Backdrop Click Listener ***
    dialog.addEventListener('click', (event) => {
      // If the element that received the click is the dialog itself (the backdrop)
      if (event.target === dialog) {
        dialog.close();
      }
    });

    // *** Cleanup Listener ***
    // Best practice: remove the dynamically created dialog element after it closes
    dialog.addEventListener('close', () => {
        dialog.remove();
    });
  }
}


// Add the event listener to the gallery container for image clicks
gallery.addEventListener('click', showImageViewer);