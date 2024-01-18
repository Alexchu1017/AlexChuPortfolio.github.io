// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });

    menu.onclick = () => {
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        navbar.classList.remove('active');
    }

    // Dark Mode
    let darkmode = document.querySelector('#darkmode');

    darkmode.onclick = () => {
        if (darkmode.classList.contains('bx-moon')) {
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    }

    // Smooth scrolling using gsap
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetElement, offsetY: 80 },
                ease: "power2.inOut",
            });
        });
    });

    // Trigger animations on scroll
    gsap.registerPlugin(ScrollTrigger);

    // Add your scroll-triggered animations here
    // ...

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
});
