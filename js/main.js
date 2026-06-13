// ── PARALLAX ─────────────────────────────────────────────────────────
function initParallax() {
  const heroBg = document.querySelector('.hero__parallax-bg');
  const pageHeroBgs = document.querySelectorAll('.page-hero__parallax');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (heroBg) {
      heroBg.style.transform = `translateY(${y * 0.35}px)`;
    }
    pageHeroBgs.forEach(bg => {
      bg.style.transform = `scale(1.1) translateY(${y * 0.25}px)`;
    });
  }, { passive: true });
}

// ── MOBILE NAV ───────────────────────────────────────────────────────
function initMobileNav() {
  const burger = document.querySelector('.nav__burger');
  const links  = document.querySelector('.nav__links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    Object.assign(links.style, {
      display:         open ? 'none' : 'flex',
      flexDirection:   'column',
      position:        'fixed',
      top:             '64px',
      left:            '0',
      right:           '0',
      background:      'rgba(13,13,13,0.97)',
      padding:         '1.5rem 2rem',
      borderBottom:    '1px solid #2a2a2a',
      gap:             '1.2rem',
      backdropFilter:  'blur(16px)',
    });
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.card, .testi-card, .mini-card');
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
    io.observe(el);
  });
}

// ── INIT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initMobileNav();
  initReveal();
});
