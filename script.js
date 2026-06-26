const hamburger = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__links");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const themeToggle = document.querySelector("#theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

const form=document.querySelector('.newsletter__form'); 
form.addEventListener('submit',(e)=> {
  e.preventDefault();
  alert('Thank you for Following!');
  form.reset();
});
