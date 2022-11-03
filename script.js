let R = 300/2;
for(let d = 0; d < 60; ++d) {
    let angle = ( d / 60) * ( 2 * Math.Pi);
    let pX = Math.cos(angle) * R;
    let pY = Math.sin(angle) * R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pY += R;
    qY += R; qY += R;
}

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours, minutes, seconds);

secondsAngle = (seconds / 60) * (2 * Math.PI);
minutesAngle = (minutes / 60) * (2 * Math.PI);
hoursAngle = ((hours % 12) /12) * (2 * Math.PI);

function drawWatch() {
    context.clearRect(0, 0, 300, 300);
    setTimeout(drawWatch, 1000);
}

drawWatch();