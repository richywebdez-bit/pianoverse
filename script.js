// Smooth scroll animation for fade-ins
const fadeEls = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeEls.forEach(el => {
  appearOnScroll.observe(el);
});


// PianoVerse Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load previous theme if saved
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});