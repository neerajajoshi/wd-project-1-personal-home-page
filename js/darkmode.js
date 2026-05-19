/**
 * This JS script enables a dark mode functionality.
 * If an HTML file includes this script, it will gain a floating dark mode toggle button,
 * which when pressed, will toggle the page between dark and light modes.
 * The user's dark/light mode preference will be stored in the browser's localStorage API.
 */

const darkModeCss = document.createElement('style');
darkModeCss.textContent = `
  .dark_mode_toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 8px black;
  }

  body.dark_mode {
    background: black;
    color: white;
  }
`;
document.head.appendChild(darkModeCss);

const darkModeToggleEl = document.createElement('button');
darkModeToggleEl.className = 'dark_mode_toggle';
darkModeToggleEl.type = 'button';
darkModeToggleEl.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeToggleEl);

if (localStorage.getItem('is_dark_mode') == 'true') {
  document.body.classList.add('dark_mode');
  darkModeToggleEl.textContent = 'Toggle Light Mode';
}

darkModeToggleEl.addEventListener('click', () => {
  document.body.classList.toggle('dark_mode');
  const isDarkMode = document.body.classList.contains('dark_mode');
  if (isDarkMode) {
    localStorage.setItem('is_dark_mode', 'true');
    darkModeToggleEl.textContent = 'Toggle Light Mode';
  } else {
    localStorage.setItem('is_dark_mode', 'false');
    darkModeToggleEl.textContent = 'Toggle Dark Mode';
  }
});
