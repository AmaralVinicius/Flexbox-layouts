const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.style.display = 'flex';

  menu.style.top = ((menu.offsetHeight + 18) * -1) + "px";

  openMenu.style.display = "none";

  setTimeout(() => {
    menu.style.opacity = "1";
    menu.style.top = "106px";
  }, 100);
});

closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0";

  menu.style.top = ((menu.offsetHeight + 18) * -1) + "px";

  setTimeout(() => {
    menu.removeAttribute("style");
    openMenu.removeAttribute("style");
  }, 200);
});
