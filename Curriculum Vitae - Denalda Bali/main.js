/*
 * Author: Denalda Bali
 * Date: April 11, 2023
 * HTML/CSS Source File for the purpose of this website is to showcase my professional and educational background
 */

/**
 * creates an event listener for scrolling on the window object.
 * When the user scrolls, the code toggles a class called "sticky" on the HTML header element
 */
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

/**
 * This code sets up two event listeners - one for when the menu icon is clicked and one for when the window is scrolled.
 * (This happens when we minimize the web page)
 */
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
/**
 * The ScrollReveal library to add reveal animations to various sections of the webpage.
 */
const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".profile-text", { delay: 350, origin: "left" });
sr.reveal(".profile-img", { delay: 350, origin: "right" });

sr.reveal(".profile,.education,.skill,.portfolio,.lang,.hobbies,.details", {
  delay: 200,
  origin: "bottom",
});
