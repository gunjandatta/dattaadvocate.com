const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    const offset = index * -100;
    // Accounting for gap in calculation
    track.style.transform = `translateX(calc(${offset}% - ${index * 20}px))`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Optional: Auto-play
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    goToSlide(currentIndex);
}, 5000);