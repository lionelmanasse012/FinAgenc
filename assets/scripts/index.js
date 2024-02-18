const body = document.querySelector("body");
const iconDark = document.querySelector(".nav__dark");
const iconLight = document.querySelector(".nav__light");
const logo = document.querySelector(".nav__logo");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav__content");
const linkColor = document.querySelectorAll(".nav__item--link");
const hamburger = document.querySelector(".nav__hamburger");
const menuBar = document.querySelector(".nav__menu--barCenter");
const menuBarTop = document.querySelector(".nav__menu--barTop");
const menuBarBottom = document.querySelector(".nav__menu--barBottom");
const navList = document.querySelector(".nav__list");
const navButton = document.querySelector(".nav__button");

iconDark.addEventListener("click", () => {
  iconDark.style.display = "none";
  iconLight.style.display = "flex";
  iconLight.style.color = "#fff";
  body.style.background = "#000";
  logo.style.color = "#fff";
  header.style.background = "#000";
  nav.style.background = "#000";

  for (var i = 0; i < linkColor.length; i++) {
    linkColor[i + 1].style.color = "#fff";
  }
});

iconLight.addEventListener("click", () => {
  iconDark.style.display = "flex";
  iconLight.style.display = "none";
  body.style.background = "#fff";
  logo.style.color = "#000";
  header.style.background = "#fff";
  nav.style.background = "#fff";
  
  for (var i = 0; i < linkColor.length; i++) {
      linkColor[i + 1].style.color = "#000";
    }
});

hamburger.addEventListener("click", () => {
  let style = window.getComputedStyle(menuBar);
  let width = parseInt(style.getPropertyValue("width"));
  if (width > 0) {
    menuBar.style.width = 0;
    menuBarTop.style.top = 0;
    menuBarTop.style.left = "50%";
    menuBarTop.style.transform = "translate(-50%) rotate(45deg)";
    menuBarBottom.style.top = 0;
    menuBarBottom.style.left = "50%";
    menuBarBottom.style.transform = "translate(-50%) rotate(-45deg)";
    nav.style.height = "300px";
    nav.style.border = "1px solid #ddd";
    navList.style.opacity = 1;
    navList.style.transform = "translate(0)";
    navButton.style.opacity = 1;
    navButton.style.transform = "translate(0)";
} else if (width === 0) {
    menuBar.style.width = "1.2rem";
    menuBarTop.style.top = "-6px";
    menuBarTop.style.transform = "translate(-50%) rotate(0)";
    menuBarBottom.style.top = "6px";
    menuBarBottom.style.transform = "translate(-50%) rotate(0)";
    nav.style.border = "0px solid transparent";
    nav.style.height = 0;
  }
});
