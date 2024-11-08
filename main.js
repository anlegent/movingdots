let player = document.getElementById("player");

let posx = 0;
let posy = 0;
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    posx += 5;
    player.style.left = posx + "px";
    if (0 == posx % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "ArrowLeft") {
    posx += -5;
    player.style.left = posx + "px";
    if (0 == posx % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "ArrowUp") {
    posy += -5;
    player.style.top = posy + "px";
    if (0 == posy % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "ArrowDown") {
    posy += 5;
    player.style.top = posy + "px";
    if (0 == posy % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "d") {
    posx += 5;
    player.style.left = posx + "px";
    if (0 == posx % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "q") {
    posx += -5;
    player.style.left = posx + "px";
    if (0 == posx % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "z") {
    posy += -5;
    player.style.top = posy + "px";
    if (0 == posy % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  } else if (e.key == "s") {
    posy += 5;
    player.style.top = posy + "px";
    if (0 == posy % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  }
});

window.addEventListener("mousedown", (e) => {
  if (e) {
    posx = e.clientX;
    posy = e.clientY;
    player.style.left = posx + "px";
    player.style.top = posy + "px";
    if (0 == posy % 2) {
      player.style.backgroundColor = "crimson";
    } else {
      player.style.backgroundColor = "black";
    }
  }
});
