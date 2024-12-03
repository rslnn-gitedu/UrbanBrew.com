
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', (event) => {
        event.stopPropagation();

        slides.forEach(s => s.classList.remove('active'));

        slide.classList.add('active');

        slideTrack.style.animationPlayState = 'paused';
    });
});


document.addEventListener('click', (event) => {

    if (!event.target.closest('.slide')) {
        slides.forEach(s => s.classList.remove('active'));
        slideTrack.style.animationPlayState = 'running';
    }
});
