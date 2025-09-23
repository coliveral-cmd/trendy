
    // Get the menu icon and the menu list
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    // Add a click event listener to the icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'active' class on the menu list
        menu.classList.toggle('active');
    });
