// Defint the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define some size
var radius = canvas.height / 2;

// Center the ctx
ctx.translate(radius, radius);

// Draw the Clock every second
setInterval(drawClock, 1000);

function clearCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "copy";
  ctx.strokeStyle = "transparent";
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}

// Draw the Clock
function drawClock() {
  drawFace(ctx, radius);
  drawTime(ctx, radius);
  drawSteps(ctx, radius);
  drawNose(ctx, radius);
}

// Define how to draw the Face
function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.fill();
}

// Define how to draw the Numbers
function drawNumbers(ctx, radius) {
  var ang;
  var num;

  // Define the text styles
  ctx.font = "14px 'Lato'";
  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // Rotate and put number and rotate back
  for (num = 1; num <= 12; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

// Draw the Hands depends on current time
function drawTime(ctx, radius) {
  // Get the current time
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // Draw the Hour Hand
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.65, 12, "black");
  // Draw the Minute Hand
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, 12, "black");
  // Draw the Second Hand
  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.75, 4, "#b598ea");
}

// Define how to draw the Hands
function drawHand(ctx, pos, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawSteps(ctx, radius) {
  for (num = 1; num <= 12; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    drawStep(ctx, ang, 0, 8, "black");
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }

  for (num = 1; num <= 60; num++) {
    ang = (num * Math.PI) / 30;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    drawStep(ctx, ang, 1, 2, "black");
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawStep(ctx, pos, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -26);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawNose(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
  ctx.fillStyle = "#b598ea";
  ctx.fill();
}
