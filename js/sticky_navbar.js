// I wanted to have a sticky header on scroll, taking inspiration here:
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp 
// https://stackoverflow.com/questions/56071897/hide-when-scroll-down-appears-when-scroll-up
// https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

const navbar = document.getElementById("navbar")

let width = window.screen.width;

let scrollDown = window.pageYOffset;
window.onscroll = function() {
  let noScroll = window.pageYOffset;
  if (scrollDown > noScroll) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  } else {
    navbar.style.position = "fixed";
    navbar.style.top = "-60px";
  }
  scrollDown = noScroll;
  if (window.scrollY === 0){
    navbar.style.position = "absolute";
    navbar.style.top = "";
  }
  if (width <= 910){
    navbar.style.position = "absolute";
    navbar.style.top = "";
  }
}

// I also want the menu button on mobile to work like this, but it seems a little trickier. 
// I'll look into that if there's time for that. 