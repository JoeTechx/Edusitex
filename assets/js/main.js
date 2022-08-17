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