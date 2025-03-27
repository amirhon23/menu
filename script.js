let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn');
let closeMenu = document.querySelector('.menu_close');

btn.onclick = () => menu.style.right = "0";
closeMenu.onclick = () => menu.style.right = "-250px";
