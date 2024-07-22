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
