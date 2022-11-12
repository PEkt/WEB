var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(400, 400, 300, 0, 2*Math.PI);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "aqua"; // Задаём цвет обводки чёрный
ctx.fillStyle = "aqua"; // Задаём цвет заливки чёрный
ctx.lineWidth = 8; // Задаём ширину линий
ctx.lineCap = "round"; // определяем как будут выглядеть концы линий
ctx.translate(400, 400);
ctx.save(); // Сохраняем в контекст 
ctx.beginPath();
for (var i = 0; i < 12; i++) {
    ctx.rotate(Math.PI/6); 
    ctx.moveTo(250,0);
    ctx.lineTo(300,0);
}
 
ctx.stroke(); // Нарисовали то, что ранее описали
ctx.restore();

//ctx.rotate((Math.Pi/30*min)+(Math.PI/1800)*sec)
ctx.lineWidth = 10;
ctx.strokeStyle="white"
ctx.beginPath(); // Ставим кисть
for ( var i=0; i<24; i++){
    ctx.rotate(Math.PI/12)
    ctx.moveTo(200,115); // Перемешаем кисть
    ctx.lineTo(0,0);

} // Рисуем линию
ctx.stroke(); // Обводит
ctx.restore(); // Восстанавливаем всё сохранённого стэка
ctx.save();

// Событие загрузки страницы
window.addEventListener('load', function () {
    // Создаём интервал
    setInterval(clockPainting, 1000);
});

//let R = 300/2;
//for(let d = 0; d < 60; ++d) {
    //let angle = ( d / 60) * ( 2 * Math.Pi);
    // let pX = Math.cos(angle) * R;
    //let pY = Math.sin(angle) * R;
    //let qX = 0.9 * pX;
    //let qY = 0.9 * pY;
    //pX += R; pY += R;
    //qY += R; qY += R;
//}

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