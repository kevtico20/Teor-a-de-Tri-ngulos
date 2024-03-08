const a1 = document.getElementById("txtSideA");
const a2 = document.getElementById("txtSideB");
const a3 = document.getElementById("txtSideC");
const b1 = document.getElementById("anguloA");
const b2 = document.getElementById("anguloB");
const b3 = document.getElementById("anguloC");
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const lineWidth = 10;
ctx.font = "30px Arial";

function drawTriangle(color1, color2, color3) {
  ctx.lineWidth = lineWidth;

  ctx.fillText("A", 120, 150);
  ctx.fillText("a1", 185, 120);
  ctx.beginPath();
  ctx.moveTo(100, 250);
  ctx.lineTo(200, 50);
  ctx.strokeStyle = color1;
  ctx.stroke();

  ctx.fillText("B", 260, 150);
  ctx.fillText("a2", 245, 240);
  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(300, 250);
  ctx.strokeStyle = color2;
  ctx.stroke();

  ctx.fillText("C", 190, 280);
  ctx.fillText("a3", 125, 240);
  ctx.beginPath();
  ctx.moveTo(300, 250);
  ctx.lineTo(100, 250);
  ctx.strokeStyle = color3;
  ctx.stroke();
}

a1.addEventListener("focus", () => {
  drawTriangle("green", "black", "black");
});

a2.addEventListener("focus", () => {
  drawTriangle("black", "green", "black");
});

a3.addEventListener("focus", () => {
  drawTriangle("black", "black", "green");
});

b1.addEventListener("focus", () => {
  drawTriangle("green", "green", "black");
});

b2.addEventListener("focus", () => {
  drawTriangle("black", "green", "green");
});

b3.addEventListener("focus", () => {
  drawTriangle("green", "black", "green");
});

document.addEventListener("click", () => {
  if (!a1.contains(document.activeElement) && !a2.contains(document.activeElement) && !a3.contains(document.activeElement)
  && !b1.contains(document.activeElement) && !b2.contains(document.activeElement) && !b3.contains(document.activeElement)) {
    drawTriangle("black", "black", "black");
  }
});

drawTriangle("black", "black", "black");