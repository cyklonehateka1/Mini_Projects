const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Manual Navigation
const manualNav = manual => {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove('active')
        });

    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
 }

 btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    })
 });