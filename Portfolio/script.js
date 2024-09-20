document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x'); // Toggle icon class
        navbar.classList.toggle('active'); // Toggle navbar visibility
    });
});
