// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickInsideHamburger) {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    }
});


// animated scroll
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.scroll-hidden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});



function toggleIcon() {
    const icon = document.getElementById('toggle-icon');
    icon.innerHTML = document.getElementById('dark-toggle').checked ? '☀️' : '🌑';
  }

