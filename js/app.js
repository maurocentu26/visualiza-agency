// HTML Elements
const showMenuBtn = document.querySelector("#show-menu");
const closeMenuBtn = document.querySelector("#close-menu");
const servicesCards = document.querySelector("#servicios .services__selection");



// HTML Elements
const navMenuContainer = document.querySelector("#nav-menu");
const navLinks = navMenuContainer.querySelectorAll("a");

// Initialize event listeners.
eventListeners();

// Functions
function eventListeners() {
   showMenuBtn.addEventListener("click", showNavMenu);
   closeMenuBtn.addEventListener("click", closeNavMenu);
   navLinks.forEach(link => {
      link.addEventListener("click", () => {
         navMenuContainer.querySelector(".active").classList.remove("active");
         link.parentElement.classList.add("active");
         closeNavMenu();
      });
   });
   servicesCards.addEventListener("click", (e) => {
      if (e.target.classList.contains("service__button")) {
        const target = e.target.dataset.target;
        const targetElement = document.querySelector(`#${target}`);
        targetElement.classList.toggle("active");
        const textBtn = targetElement.classList.contains("active") ? "Ver menos" : "Ver más";
        e.target.textContent = textBtn;
      }
   });
}

function showNavMenu(e) {
   navMenuContainer.classList.add("active");
   showMenuBtn.style.display = "none";
}

function closeNavMenu() {
   navMenuContainer.classList.remove("active");
   showMenuBtn.style.display = "unset";
}