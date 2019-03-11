"use strict";
var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
if (menuButton) {
    menuButton.addEventListener('click', displayMenu);
}
function displayMenu() {
    if (menu) {
        menu.classList.toggle('header__nav--visible');
    }
}
var l = 1;
