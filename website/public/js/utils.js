// Toggle Night/Light Theme
function toggleTheme() {
    const root = document.documentElement;
    const nightModeButton = document.querySelector('.nightmode-button');

    // Check current theme and toggle
    if (root.classList.contains('rosePine')) {
        root.classList.remove('rosePine'); // Remove the existing theme
        root.classList.add('rosePineDawn'); // Add the new theme
        nightModeButton.textContent = '☀️'; // Sun emoji for rosePineDawn
        localStorage.setItem('theme', 'rosePineDawn');
        console.log('yoo');
    } else {
        root.classList.remove('rosePineDawn'); // Remove the existing theme
        root.classList.add('rosePine'); // Add the new theme
        nightModeButton.textContent = '🌙'; // Moon emoji for rosePine
        localStorage.setItem('theme', 'rosePine');
        console.log('hey');
    }
}

// Load Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'rosePine'; // Default theme
    const root = document.documentElement;
    const nightModeButton = document.querySelector('.nightmode-button');

    // First, remove both theme classes, then add the saved theme class
    root.classList.remove('rosePine', 'rosePineDawn');
    root.classList.add(savedTheme); // Add the saved theme class
    
    // Set the correct button text based on the saved theme
    if (savedTheme === 'rosePine') {
        nightModeButton.textContent = '🌙'; // Set moon icon for night theme
    } else {
        nightModeButton.textContent = '☀️'; // Set sun icon for dawn theme
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
