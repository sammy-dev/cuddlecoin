/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/web_frontend/src/index.js ***!
  \***************************************/


/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Plug wallet integration
 */

// Initialises the application listeners and handlers
function main() {
  const button = document.querySelector('#Buy-cuddle');
  button.addEventListener("click", onButtonPress);
}

async function onButtonPress() {
  const hasAllowed = await window.ic.plug.requestConnect();

  if (hasAllowed) {
    console.log('Plug wallet is connected');
    // Replace this URL with the actual URL of your token swap page
    const tokenSwapUrl = "https://app.icpswap.com/swap?input=ate73-biaaa-aaaam-acp3a-cai&output=ryjl3-tyaaa-aaaaa-aaaba-cai"; 
    window.location.href = tokenSwapUrl;
  } else {
    console.log('Plug wallet connection was refused');
  }
}
setTimeout(function () {
  el.target.disabled = false;
}, 5000);
// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);

/******/ })()
;
//# sourceMappingURL=index.js.map