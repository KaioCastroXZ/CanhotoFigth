/* Canhoto Fight — script mínimo: menu mobile + embed do Instagram */

// --- Menu mobile ---------------------------------------------------------
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

// Fecha o menu ao clicar num link
document.querySelectorAll('.nav a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  })
);

// --- Embeds do Instagram (reels da academia e do Laysson) ----------------
if (document.querySelector('.instagram-media')) {
  const ig = document.createElement('script');
  ig.async = true;
  ig.src = 'https://www.instagram.com/embed.js';
  ig.onload = () => window.instgrm?.Embeds.process();
  document.body.appendChild(ig);
}
