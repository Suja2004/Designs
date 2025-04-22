// slider
let slider = document.querySelector('.list');
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = () => {
  slider.append(slider.querySelector('img:first-child'));
};

prevBtn.onclick = () => {
  slider.prepend(slider.querySelector('img:last-child'));
};

// cube
// const cube = document.querySelector(".container");

// document.addEventListener("mousemove", (e) => {
//   rotateEle(e, cube);
// });

// function rotateEle(event, element) {
//   const x = event.clientX;
//   const y = event.clientY;

//   const middleX = window.innerWidth / 2;
//   const middleY = window.innerHeight / 2;

//   const offsetX = ((x - middleX) / middleX) * 180;
//   const offsetY = ((y - middleY) / middleY) * -180;
//   element.style.setProperty("--rotateX", offsetY + "deg");
//   element.style.setProperty("--rotateY", offsetX + "deg");
// }
