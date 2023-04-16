const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menu_btn.addEventListener('click',navToggle)

function navToggle() {
    menu_btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');

}