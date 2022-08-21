// change navbar style on scroll
window.addEventListener("scroll", () => {

    // document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 0);
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

// show or hide faq answers on click

const faqs = document.querySelectorAll(".faq");
const accordions = document.querySelectorAll(".faq__header");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");


        // change icon
        const icon = faq.querySelector(".arrow__down i");
        if (icon.className === "bx bxs-down-arrow") {
            icon.className = "bx bxs-up-arrow";
        } else {
            icon.className = "bx bxs-down-arrow";
        }

        // close other faqs if open and not the one clicked

        if (faq.classList.contains("open")) {
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.classList.remove("open");
                    otherFaq.querySelector(".arrow__down i").className = "bx bxs-down-arrow";
                }
            })
        }
    })
})

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("open__accordion");
        // change icon
        const icon = accordion.querySelector(".arrow__down i");
        if (icon.className === "bx bxs-down-arrow") {
            icon.className = "bx bxs-up-arrow";
        } else {
            icon.className = "bx bxs-down-arrow";
        }

        // close other faqs if open and not the one clicked
        if (accordion.classList.contains("open__accordion")) {
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove("open__accordion");
                    otherAccordion.querySelector(".arrow__down i").className = "bx bxs-down-arrow";
                }
            })
        }
    })
})

// show or hide nav menu on click

const menu = document.querySelector(".nav__menu");
const menuBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.add("show-menu");
        closeBtn.classList.add("show-Btn");
        menuBtn.classList.add("show-menuBtn");
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("show-menu");
        closeBtn.classList.remove("show-Btn");
        menuBtn.classList.remove("show-menuBtn");
    });
}