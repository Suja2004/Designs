// 7
const grid = document.querySelector(".grid");

document.addEventListener("mousemove", (e) => {
  grid.style.setProperty("--x", e.x + "px");
  grid.style.setProperty("--y", e.y + "px");
});