function handler(event) {
  var color1 = "123456789abcdef".split("");
  var color2 = "#";
  for (let i = 0; i < 6; i++) {
    color2 = color2 + color1[Math.floor(Math.random() * 15)];
  }
  document.body.style.backgroundColor = color2;
}

document.addEventListener("click", handler);
