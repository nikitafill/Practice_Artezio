document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateButtons();
    }

    function updateButtons() {
        prevButton.classList.toggle('disabled', currentIndex === 0);
        nextButton.classList.toggle('disabled', currentIndex === sliderImages.length - 1);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < sliderImages.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider(); // Initial call to set the correct state
});
