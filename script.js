// ================================
// PS GLOBAL IMPEX
// Version 3.0
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Smooth Scroll for Navigation
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    // ==========================
    // Navbar Shadow on Scroll
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.15)";

        }

    });


    // ==========================
    // Scroll Reveal Animation
    // ==========================

    const elements = document.querySelectorAll(
        ".about-card, .product-card, .service-card, .why-card, .step, .commitment-card, .package-card, .faq-item, .trust-box"
    );

    function revealElements() {

        elements.forEach(function (el) {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";

                el.style.transform = "translateY(0)";

            }

        });

    }

    elements.forEach(function (el) {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = "all .6s ease";

    });

    revealElements();

    window.addEventListener("scroll", revealElements);


    // ==========================
    // Active Navigation Link
    // ==========================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    // ==========================
    // Hero Button Hover Animation
    // ==========================

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", function () {

            btn.style.transform = "scale(1.05)";

        });

        btn.addEventListener("mouseleave", function () {

            btn.style.transform = "scale(1)";

        });

    });

});
// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
