// Menu 
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
}

// Cart Toggle
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}
// Login Form Toggle
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}
// On Click On Menu Links Removed Menu
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('move');
    
}
// Change Header Background Color And Shadow On Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Scroll Top
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});