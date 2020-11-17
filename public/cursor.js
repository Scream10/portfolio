let mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
};

let backgroundBlack = document.querySelectorAll(".background-black");
console.log(backgroundBlack);

backgroundBlack.forEach(bg => {
  bg.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-white");
  });
  bg.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-white");
  });
});