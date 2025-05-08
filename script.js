// Smooth scroll animation for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.opacity = 1 - window.scrollY / 600;
});

// Alert when CV is downloaded
const cvButton = document.querySelector('a[download]');
cvButton.addEventListener('click', () => {
    alert('Thanks for downloading my CV!');
});
