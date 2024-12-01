function toggleNavBar() {
    const nav = document.querySelector('.NavigationBarItems');
    nav.classList.toggle('show'); // Toggle the "show" class to display or hide
}

// Optional: Close the nav when clicking outside of it
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.NavigationBarItems');
    const hamburger = document.querySelector('.hamburgerTOP');
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('show');
    }
});
