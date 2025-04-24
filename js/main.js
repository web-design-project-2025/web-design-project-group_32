// Set up burgerMenu from Sean

const burgerMenu = document.getElementById('burgermenu');
const mobileMenu = document.getElementById('mobileMenu');

burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('show');
});