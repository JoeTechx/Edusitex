// change navbar style on scroll
window.addEventListener("scroll", () => {

    // document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 0);
    const navbar = document.querySelector("nav");
    if (window.scrollY >0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

// show or hide faq answers on click

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // change icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "bx bx-plus") {
            icon.className = "bx bx-minus";
        } else {
            icon.className = "bx bx-plus";
        }

        // close other faqs if open and not the one clicked
        
        if (faq.classList.contains("open")) {
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.classList.remove("open");
                    otherFaq.querySelector(".faq__icon i").className = "bx bx-plus";
                }
            } )
        }
    })
})