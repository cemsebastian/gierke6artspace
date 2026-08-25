// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');

if (toggle && navList) {
  const setOpen = (open) => {
    navList.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  };
  toggle.addEventListener('click', () => setOpen(!navList.classList.contains('is-open')));
  navList.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
}

// Solid header once scrolled past the top of the hero
const header = document.querySelector('.site-header.over-hero');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Rotating hero headline (zimmer48-style). The static full title stays in the
// markup for no-JS visitors and reduced-motion users; screen readers keep the
// full line via a visually hidden span.
const heroTitle = document.querySelector('.hero-title');
if (heroTitle && !prefersReduced) {
  const words = ['Gallery.', 'Meetings.', 'Workshops.', 'Productions.'];
  const h1 = heroTitle.parentElement;
  h1.textContent = '';
  const srText = document.createElement('span');
  srText.className = 'sr-only';
  srText.textContent = words.join(' ');
  const rotator = document.createElement('span');
  rotator.className = 'hero-rotator';
  rotator.setAttribute('aria-hidden', 'true');
  rotator.textContent = words[0];
  h1.append(srText, rotator);
  let idx = 0;
  setInterval(() => {
    rotator.classList.add('is-out');
    setTimeout(() => {
      idx = (idx + 1) % words.length;
      rotator.textContent = words[idx];
      rotator.classList.remove('is-out');
    }, 450);
  }, 2800);
}

// Scroll reveal — skipped entirely for reduced-motion users (CSS shows content)
const revealEls = document.querySelectorAll('.reveal');

if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
