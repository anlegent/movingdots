let player = document.getElementById("player");

let posx = 0;
let posy = 0;
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    posx += 10;
    player.style.left = posx + "px";
  } else if (e.key == "ArrowLeft") {
    posx += -10;
    player.style.left = posx + "px";
  } else if (e.key == "ArrowUp") {
    posy += -10;
    player.style.top = posy + "px";
  } else if (e.key == "ArrowDown") {
    posy += 10;
    player.style.top = posy + "px";
  }
});
