// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.hasAttribute('data-theme') ? body.removeAttribute('data-theme') : body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = body.hasAttribute('data-theme') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.getAttribute('data-theme') || 'light');
});

// Carregar tema salvo
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}
