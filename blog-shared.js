// Redback Blog — Shared JS
// Mobile menu toggle + scroll fade-in animations

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const menuClose = document.getElementById('menu-close');

if (menuBtn && menuOverlay) {
  menuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (menuClose && menuOverlay) {
  menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Close menu on link click
document.querySelectorAll('#menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOverlay) {
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// Scroll fade-in via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link highlight
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav-link]').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('text-[#FF5B01]');
  }
});
