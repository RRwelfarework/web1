// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Add more form validation or API call here if needed
});

// Automatic Slideshow
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds






// Variables
let currentSlide = 0;
const carouselContent = document.querySelector('.carousel-content');
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;
const slideWidth = items[0].offsetWidth + 20;  // Add margin (10px on each side)

// Move slide function
function moveSlide(direction) {
    currentSlide += direction;
    
    // Loop back to the first slide
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    carouselContent.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// Automatic sliding every 10 seconds
setInterval(() => {
    moveSlide(1);
}, 10000);

// Optional: Add a resize event listener to adjust slide width on window resize
window.addEventListener('resize', () => {
    const newSlideWidth = items[0].offsetWidth + 20;
    carouselContent.style.transform = `translateX(${-currentSlide * newSlideWidth}px)`;
});
