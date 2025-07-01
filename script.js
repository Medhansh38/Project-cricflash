// Slideshow Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(img => img.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 2500);
    
    // Initialize first slide
    showSlide(0);
    
    // Search functionality
    const searchBtn = document.querySelector('.search-box button');
    searchBtn.addEventListener('click', function() {
        const searchTerm = document.querySelector('.search-box input').value;
        alert(`Searching for: ${searchTerm}`);
        // Implement actual search functionality here
    });
    
    // Login button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        alert('Login functionality will be implemented soon!');
        // Implement login functionality here
    });
});
// Add this to your existing script.js
function initSliders() {
    const sliders = [
        {
            selector: '.image-slider',  // First slider (World Cup)
            currentIndex: 0,
            timer: null
        },
        {
            selector: '.image-slider-2', // Second slider (IPL)
            currentIndex: 0,
            timer: null
        },
         {
            selector: '.image-slider-3', 
            currentIndex: 0,
            timer: null
        }
    ];

    sliders.forEach(slider => {
        const element = document.querySelector(slider.selector);
        const images = element.querySelectorAll('img');
        const interval = 2500; // 2.5 seconds

        function showNext() {
            // Fade out current image
            images[slider.currentIndex].classList.remove('active');
            
            // Calculate next index
            slider.currentIndex = (slider.currentIndex + 1) % images.length;
            
            // Fade in next image
            images[slider.currentIndex].classList.add('active');
        }

        // Initialize first image
        images[0].classList.add('active');
        
        // Start continuous loop
        slider.timer = setInterval(showNext, interval);

        // Pause on hover
        element.addEventListener('mouseenter', () => {
            clearInterval(slider.timer);
        });

        element.addEventListener('mouseleave', () => {
            // Restart timer immediately
            slider.timer = setInterval(showNext, interval);
            // Force show next image to prevent pause
            showNext();
        });
    });
}
 window.addEventListener('load', function() {
            setTimeout(function() {
                document.body.classList.add('loaded');
                setTimeout(function() {
                    document.querySelector('.preloader').style.display = 'none';
                }, 500); // Match this with the CSS transition time
            }, 2000); // Show preloader for minimum 2 seconds
        });
document.addEventListener('DOMContentLoaded', initSliders);
// In your slideshow script
let currentIndex = 0;
const images = document.querySelectorAll('.hero-slideshow img');
const transitionTime = 5000; // 5 seconds per slide

function nextSlide() {
    // Remove active class from all first
    images.forEach(img => img.classList.remove('active'));
    
    // Add to next image
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    
    // Schedule next transition
    setTimeout(nextSlide, transitionTime);
}

// Initialize
images[0].classList.add('active');
setTimeout(nextSlide, transitionTime);

// Preload images
window.addEventListener('load', () => {
    images.forEach(img => {
        const temp = new Image();
        temp.src = img.src;
    });
});
// Preloader timeout (optional - remove if you have your own)
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.preloader').style.opacity = '0';
      setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
      }, 500);
    }, 1500);
  });
   document.getElementById("login-btn").addEventListener("click", function () {
    alert("🔒 Login feature coming soon!");
  });
   document.getElementById("search-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const searchInput = e.target.value.trim();
      if (searchInput) {
        alert(`Search feature will be avalaible soon`);
      } else {
        alert("Please enter something to search.");
      }
    }
  });