// DOM elements
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// ensure consistent starting icon/text
body.classList.remove('light');
themeIcon.className = 'fa-solid fa-moon';

// Theme toggle (keeps using CSS variables)
toggleBtn.addEventListener('click', () => {
  const light = body.classList.toggle('light');
  themeIcon.className = light ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Close menu when a nav link is clicked (for mobile)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'fa-solid fa-bars';
  }
});

// Optional: close mobile menu on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'fa-solid fa-bars';
  }
});
