const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
if (menuButton) {
	menuButton.addEventListener('click', displayMenu);
}
function displayMenu() {
	if (menu) {
		menu.classList.toggle('header__nav--visible');
	}
}
let l = 1;