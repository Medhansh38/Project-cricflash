 /* window.addEventListener('load', function() {
            setTimeout(function() {
                document.body.classList.add('loaded');
                setTimeout(function() {
                    document.querySelector('.preloader').style.display = 'none';
                }, 500); // Match this with the CSS transition time
            }, 2000); // Show preloader for minimum 2 seconds
        });
        // Function to load YouTube video when clicked
function loadVideo(element) {
    const videoId = element.getAttribute('data-video-id');
    const videoParams = element.getAttribute('data-video-params') || '';
    
    // Create iframe with all necessary attributes
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&${videoParams}`);
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';

    // Replace the thumbnail with the iframe
    element.innerHTML = '';
    element.appendChild(iframe);
}

// Lazy load thumbnails when they come into view
function setupLazyLoading() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const thumbnail = container.querySelector('.video-thumbnail');
                const videoId = container.getAttribute('data-video-id');
                
                // Load higher quality thumbnail
                thumbnail.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                
                // Set click handler
                container.addEventListener('click', function() {
                    loadVideo(container);
                });
                
                observer.unobserve(container);
            }
        });
    }, {
        rootMargin: '200px', // Load when 200px away from viewport
        threshold: 0.1
    });

    videoContainers.forEach(container => {
        observer.observe(container);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    
    // Optional: Add click handler for videos already in viewport
    document.querySelectorAll('.video-container').forEach(container => {
        container.addEventListener('click', function() {
            loadVideo(container);
        });
    });
});*/
// Preloader Handler
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const minDisplayTime = 2000; // 2 seconds minimum
    const fadeOutTime = 500; // Match with CSS transition
    const loadTime = performance.now();

    // Ensure preloader shows for minimum time even if page loads faster
    const remainingTime = minDisplayTime - (performance.now() - loadTime);
    const displayTime = remainingTime > 0 ? remainingTime : 0;

    setTimeout(function() {
        document.body.classList.add('loaded');
        setTimeout(function() {
            preloader.style.display = 'none';
            preloader.remove(); // Clean up from DOM
        }, fadeOutTime);
    }, displayTime);
});

// JavaScript for Functionality
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsContainer = document.querySelector('.slide-dots');
  let currentIndex = 0;
  
  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  // Navigation functions
  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
    
    const dots = document.querySelectorAll('.slide-dots span');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showSlide(currentIndex);
  }
  
  // Event listeners
  document.querySelector('.next-slide').addEventListener('click', nextSlide);
  document.querySelector('.prev-slide').addEventListener('click', prevSlide);
  
  // Auto-rotate every 8 seconds
  setInterval(nextSlide, 8000);
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
