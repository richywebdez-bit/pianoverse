// ===== Smooth Fade-In Animation =====
const fadeEls = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeEls.forEach(el => appearOnScroll.observe(el));

// ===== Dark Mode Toggle (Auto + Persistent) =====
const body = document.body;

// Create button if not present
let toggleBtn = document.getElementById('theme-toggle');
if (!toggleBtn) {
  toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.className = 'theme-btn';
  toggleBtn.textContent = '🌙 Dark Mode';
  document.body.appendChild(toggleBtn);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
} else {
  body.classList.remove('dark-mode');
  toggleBtn.textContent = '🌙 Dark Mode';
}

// Button click event
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
