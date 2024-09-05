let dropMenu = document.querySelector(".drop-menu");
let closeMenu = document.querySelector(".close-menu");
let menu = document.querySelector(".menu");
let dropDown = document.querySelector(".dropDown");

dropMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenu.style.display = "flex";
  dropDown.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  dropDown.style.display = "none";
});

menu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  dropDown.style.display = "none";
});

function applyResponsiveStyle() {
  if (window.innerWidth > 740) {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    dropDown.style.display = "none";
  }
}

window.addEventListener("resize", applyResponsiveStyle);
applyResponsiveStyle();
