  window.addEventListener('load', function() {
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