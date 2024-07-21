function toggleTheme() {
    const root = document.documentElement;
    const nightModeButton = document.querySelector('.nightmode-button');

    if (root.classList.contains('rosePine')) {
        root.classList.remove('rosePine');
        root.classList.add('rosePineDawn');
        nightModeButton.textContent = '☀️'; // Sun emoji for rosePineDawn
    } else {
        root.classList.remove('rosePineDawn');
        root.classList.add('rosePine');
        nightModeButton.textContent = '🌙'; // Moon emoji for rosePine
    }
}
