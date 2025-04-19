// let nextDOm = document.getElementById("next");
// let prevDOm = document.getElementById("prev");
// let carouselDom = document.querySelector(".carousel");
// let listItemDOm = document.querySelector(".carousel .list");
// let thumbnailDom = document.querySelector(".carousel .thumbnail");

// nextDOm.onclick = () => {
//   showSlider("next");
// };

// prevDOm.onclick = () => {
//   showSlider("prev");
// };

// let timeRunning = 2500;
// let timeAutoNext = 7000;
// let runTimeOut;
// let runAutoRun = setTimeout(() => {
//   nextDOm.click();
// }, timeAutoNext);

// function showSlider(type) {
//   let itemSlider = document.querySelectorAll(".carousel .list .item");
//   let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

//   if (type === "next") {
//     listItemDOm.appendChild(itemSlider[0]);
//     thumbnailDom.appendChild(itemThumbnail[0]);
//     carouselDom.classList.add("next");
//   } else {
//     let positionLastItem = itemSlider.length - 1;
//     listItemDOm.prepend(itemSlider[positionLastItem]);
//     thumbnailDom.prepend(itemThumbnail[positionLastItem]);
//     carouselDom.classList.add("prev");
//   }

//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove("next");
//     carouselDom.classList.remove("prev");
//   }, timeRunning);

//   clearTimeout(runAutoRun);
//   runAutoRun = setTimeout(() => {
//     nextDOm.click();
//   }, timeAutoNext);
// }

// 7
// const grid = document.querySelector(".grid");

// document.addEventListener("mousemove", (e) => {
//   grid.style.setProperty("--x", e.x + "px");
//   grid.style.setProperty("--y", e.y + "px");
// });

// slider
// let slider = document.querySelector('.list');
// let nextBtn = document.getElementById("next");
// let prevBtn = document.getElementById("prev");

// nextBtn.onclick = () => {
//   slider.append(slider.querySelector('img:first-child'));
// };

// prevBtn.onclick = () => {
//   slider.prepend(slider.querySelector('img:last-child'));
// };

// 3D tilting card
// const pre = document.querySelector("pre");

// document.addEventListener("mousemove", (e) => {
//   rotateEle(e, pre);
// });

// function rotateEle(event, element) {
//   const x = event.clientX;
//   const y = event.clientY;

//   const middleX = window.innerWidth / 2;
//   const middleY = window.innerHeight / 2;

//   const offsetX = ((x - middleX) / middleX) * 45;
//   const offsetY = ((y - middleY) / middleY) * -45;
//   element.style.setProperty("--rotateX", offsetY + "deg");
//   element.style.setProperty("--rotateY", offsetX + "deg");
// }

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
