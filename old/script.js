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

function startTestiSlider() {
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
    startTestiSlider();
    this.textContent = '⏸ Pause';
  } else {
    stopSlider();
    this.textContent = '▶️ Play';
  }
  isPaused = !isPaused;
});

showTestimonial(currentIndex);
startTestiSlider();

// Event Slider
const eventSlides = document.querySelectorAll('.event-slide');
const dotContainer = document.getElementById('event-dots');
let eventIndex = 0;

function showEventSlide(index) {
  eventSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  Array.from(dotContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === index);
  });
}

function createDots() {
  eventSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      eventIndex = i;
      showEventSlide(eventIndex);
    });
    dotContainer.appendChild(dot);
  });
}

function startEventSlider() {
  setInterval(() => {
    eventIndex = (eventIndex + 1) % eventSlides.length;
    showEventSlide(eventIndex);
  }, 2000);
}

// Initialize
createDots();
showEventSlide(eventIndex);
startEventSlider();