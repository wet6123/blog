const menubar = document.querySelector("#menubar");
const submenu = document.querySelector(".menubarSubmenus");
const menu = document.querySelector(".menu");

function openMenubar() {
  submenu.style.display = "block";
  console.log("open");
}
function closeMenubar() {
  submenu.style.display = "none";
  console.log("close");
}

menu.addEventListener("mouseenter", openMenubar);
menu.addEventListener("mouseleave", closeMenubar);
