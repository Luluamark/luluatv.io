"use strict";

/////////////////////////////////////////////////////Show and hide the nav
const mobileBtn = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

mobileBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

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

////////////////////////////////////////////////Fixinf flexbox gap proptery missing in some safari versions

function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
