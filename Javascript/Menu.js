window.onload = function() {
    // Get all the buttons with the 'Tab' class inside links
    var buttons = document.querySelectorAll('.NavigationItems a button');

    // Get the current page URL
    var currentPage = window.location.pathname;

    // Loop through all buttons and add the 'active' class to the one that matches the current page
    buttons.forEach(function(button) {
        // Get the href attribute of the <a> tag
        var buttonLink = button.parentElement.getAttribute('href'); 
        
        // Check for exact match between current page and button's href
        if (currentPage === buttonLink) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
};


    function toggleMenu() {
        const menu = document.querySelector('.NavigationItems');
        menu.classList.toggle('show'); // Toggle the "show" class to display or hide
    }

    // Optional: Close the nav when clicking outside of it
    document.addEventListener('click', function (event) {
        const menu = document.querySelector('.NavigationItems');
        const hamburgerMenu = document.querySelector('.hamburger');
        if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });








