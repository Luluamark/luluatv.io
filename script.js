"use strict";

//////////////////////////////////////////////////// Horizontal video scroll infinite
const scrollers = document.querySelectorAll(".youtube-videos");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".videos");

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);

      console.log(duplicatedItem);
    });
  });
}

////////////////////////////////////////////////////Fade-in-out animation
const contents = document.querySelectorAll(".slide-in-content");

let index = 0;
function animateContents() {
  contents[index].classList.add("visible");

  setTimeout(() => {
    contents[index].classList.remove("visible");
    index++;

    if (index >= contents.length) {
      index = 0;
    }

    animateContents();
  }, index * 2000);
}
contents.forEach((content) => {
  content.classList.remove("visible");
});

animateContents();

// const contents = document.querySelectorAll(".slide-in-content");

// let index = 0;

// setInterval(() => {
//   contents[index].classList.add("visible");

//   setTimeout(() => {
//     contents[index].classList.remove("visible");
//   }, 3500);

//   index++;

//   if (index >= contents.length) {
//     index = 0;
//   }
// }, 3000);
