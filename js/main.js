// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');

if (burger && links) {
  burger.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--bg2)';
    links.style.padding = '1.5rem 2rem';
    links.style.borderBottom = '1px solid var(--border)';
    links.style.gap = '1rem';
  });
}
