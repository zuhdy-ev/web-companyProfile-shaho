// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menutup sideMenu
const sideMenu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if (!sideMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});