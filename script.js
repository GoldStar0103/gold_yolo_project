// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navUl.classList.toggle('open');
});
