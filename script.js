// Toggle burger menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Testimonial slider
let currentIndex = 0;
let testimonials = document.querySelectorAll('.testimonial-item');
let interval;
let isPaused = false;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.style.display = i === index ? 'flex' : 'none';
  });
}

function startSlider() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 1500);
}

function stopSlider() {
  clearInterval(interval);
}

document.getElementById('pauseSliderBtn').addEventListener('click', function () {
  if (isPaused) {
    startSlider();
    this.textContent = '⏸ Pause';
  } else {
    stopSlider();
    this.textContent = '▶️ Play';
  }
  isPaused = !isPaused;
});

showTestimonial(currentIndex);
startSlider();
