// --------------HAMBURGER MENU------------------
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    logo.classList.toggle("active");
});
