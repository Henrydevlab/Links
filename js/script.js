// Get the theme toggle button and body element
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the selected theme (dark or light)
function applyTheme(theme) {
    if (theme === 'dark') {
        // Apply dark mode styles
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        // Change toggle button icon to a sun (indicating light mode is available)
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        // Set dark mode background and text color
        body.style.background = 'linear-gradient(to bottom, #04343C, #1a1a1a)';
        body.style.color = '#e3ebeb';
    } else {
        // Apply light mode styles
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        // Change toggle button icon to a moon (indicating dark mode is available)
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        // Set light mode background and text color
        body.style.background = 'linear-gradient(to bottom, #e3ebeb, #04b383)';
        body.style.color = '#04343c';
    }
}

// Event listener for the theme toggle button click
toggleButton.addEventListener('click', () => {
    // Determine the new theme based on the current mode
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    // Apply the new theme
    applyTheme(newTheme);
    // Save the selected theme to localStorage for persistence
    localStorage.setItem('theme', newTheme);
});

// Initialize the theme on page load based on saved preference or system setting
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // If a theme is saved in localStorage, apply it
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference for dark mode and apply it
    applyTheme('dark');
} else {
    // Default to light mode if no preference is found
    applyTheme('light');
}
