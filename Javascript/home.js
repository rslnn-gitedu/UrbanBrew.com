// Get the slide track and all slides
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

// Pause the animation when a slide is clicked
slides.forEach(slide => {
    slide.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click propagation to the document

        // Remove the active class from all slides
        slides.forEach(s => s.classList.remove('active'));

        // Add the active class to the clicked slide
        slide.classList.add('active');

        // Pause the animation
        slideTrack.style.animationPlayState = 'paused';
    });
});

// Resume the animation when clicking outside the slider
document.addEventListener('click', (event) => {
    // Check if the click is outside any slide
    if (!event.target.closest('.slide')) {
        // Remove active class from all slides
        slides.forEach(s => s.classList.remove('active'));

        // Resume the animation
        slideTrack.style.animationPlayState = 'running';
    }
});
