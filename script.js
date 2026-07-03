const menuToggle = document.getElementById(menuToggle);
const menunav    = doment.getElementById(menuNav);

menuToggle.addEventListener('click', () => {
    menunav.classList.toggle('active');

const estaAberto = menunav.classList.contains('is-open');
menuToggle.setAttribute('aria-expanded', estaAberto);
});