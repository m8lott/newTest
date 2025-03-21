const mainMenuLinks = document.querySelectorAll(".header__menu .menu__link");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  nav.classList.toggle("show");
});

const toggles = document.querySelectorAll(".submenuu-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const parent = e.target.closest(".submenuu-item");

    document.querySelectorAll(".submenuu-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });
});

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("toggle");
    nav.classList.remove("show");
  });
});

function setActiveLink() {
  const currentUrl = window.location.href;

  mainMenuLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveLink();
