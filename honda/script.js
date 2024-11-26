let currentIndex = 0;
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;

function updateSlidePosition() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}
