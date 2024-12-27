// Toggle Night/Light Theme
function toggleTheme() {
    const root = document.documentElement;
    const nightModeButton = document.querySelector('.nightmode-button');

    if (root.classList.contains('rosePine')) {
        root.classList.remove('rosePine');
        root.classList.add('rosePineDawn');
        nightModeButton.textContent = '☀️'; // Sun emoji for rosePineDawn
        localStorage.setItem('theme', 'rosePineDawn');
    } else {
        root.classList.remove('rosePineDawn');
        root.classList.add('rosePine');
        nightModeButton.textContent = '🌙'; // Moon emoji for rosePine
        localStorage.setItem('theme', 'rosePine');
    }
}

// Load Theme on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'rosePine'; // Default theme
    const root = document.documentElement;
    const nightModeButton = document.querySelector('.nightmode-button');

    root.classList.add(savedTheme);
    nightModeButton.textContent = savedTheme === 'rosePine' ? '🌙' : '☀️';
});

// Hide Navbar on Scroll
let prevScrollpos = window.pageYOffset;

const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-200px';
    }
    prevScrollpos = currentScrollPos;
};

// Add debounced scroll event listener
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            handleScroll();
            isScrolling = false;
        }, 100); // Adjust debounce delay as needed
    }
});
