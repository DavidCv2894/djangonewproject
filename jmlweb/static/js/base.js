///// BOTON NAV MENU CONFIG //////
const nav_menu_button = document.querySelector('#boton_nav_menu');
const header_web = document.querySelector('#header_web');
const nav_menu = document.querySelector('#nav_menu_list');
nav_menu_button.addEventListener('click', ()=>{
header_web.classList.toggle('header-movil');
nav_menu.classList.toggle('nav-menu-list-movil');
});
/////////////////////////////////////////////////

//////BOTONES NAV MENU //////

const nav_menu_btn_empresa= document.querySelector ('#nav_menu_boton_empresa');
const nav_menu_empresa_container = document.querySelector('#nav_menu_empresa_container');
nav_menu_btn_empresa.addEventListener('click', ()=>{
header_web.classList.remove('header-movil');
nav_menu.classList.remove('nav-menu-list-movil');
nav_menu_empresa_container.scrollIntoView({
    behavior: "smooth", // Efecto de desplazamiento suave
    block: "start" // Desplaza el elemento a la parte superior de la vista
  });
});