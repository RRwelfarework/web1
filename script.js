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






// Sample data for demonstration, in real scenario you will fetch this data from an API
const sampleClimateData = {
    'New York': {
        temperature: '12°C',
        co2: '400 ppm',
        seaLevel: '3.2 mm',
        methane: '1900 ppb'
    },
    'Los Angeles': {
        temperature: '18°C',
        co2: '430 ppm',
        seaLevel: '3.8 mm',
        methane: '1700 ppb'
    },
    'Mangalore': {
        temperature: '25°C',
        co2: '420 ppm',
        seaLevel: '3.5 mm',
        methane: '1800 ppb'
    }
};

// Function to search for location and update meters
document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;

    if (sampleClimateData[location]) {
        // Update climate meters based on location data
        document.getElementById('temperature-meter').querySelector('.meter-value').textContent = sampleClimateData[location].temperature;
        document.getElementById('co2-meter').querySelector('.meter-value').textContent = sampleClimateData[location].co2;
        document.getElementById('sea-level-meter').querySelector('.meter-value').textContent = sampleClimateData[location].seaLevel;
        document.getElementById('methane-meter').querySelector('.meter-value').textContent = sampleClimateData[location].methane;
    } else {
        alert('Searching....');
    }
});


async function fetchClimateData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`);
        const data = await response.json();
        
        //  data to update the meters
        document.getElementById('temperature-meter').querySelector('.meter-value').textContent = `${Math.round(data.main.temp - 273.15)}°C`;
        document.getElementById('co2-meter').querySelector('.meter-value').textContent = '415 ppm'; // Placeholder, API does not provide CO2 data
        document.getElementById('sea-level-meter').querySelector('.meter-value').textContent = '3.2 mm'; // Placeholder
        document.getElementById('methane-meter').querySelector('.meter-value').textContent = '1800 ppb'; // Placeholder
    } catch (error) {
        console.error('Error fetching climate data:', error);
        alert('Please try again.');
    }
}

document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    fetchClimateData(location);
});
