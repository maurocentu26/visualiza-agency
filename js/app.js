// HTML Buttons
const showMenuBtn = document.querySelector("#show-menu");
const closeMenuBtn = document.querySelector("#close-menu");

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
}

function showNavMenu(e) {
   navMenuContainer.classList.add("active");
   showMenuBtn.style.display = "none";
}

function closeNavMenu() {
   navMenuContainer.classList.remove("active");
   showMenuBtn.style.display = "unset";
}