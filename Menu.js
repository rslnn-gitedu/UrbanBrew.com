window.onload = function() {
    var buttons = document.querySelectorAll('.NavigationItems a button');
    var currentPage = window.location.pathname;

    buttons.forEach(function(button) {
        var buttonLink = button.parentElement.getAttribute('href'); 
        
        if (currentPage === buttonLink) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
};


    function toggleMenu() {
        const menu = document.querySelector('.NavigationItems');
        menu.classList.toggle('show');
    }

    document.addEventListener('click', function (event) {
        const menu = document.querySelector('.NavigationItems');
        const hamburgerMenu = document.querySelector('.hamburger');
        if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });








