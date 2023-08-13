// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide mobile navigation menu
const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileNavBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile navigation menu when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Add any other JavaScript functionality you need here
