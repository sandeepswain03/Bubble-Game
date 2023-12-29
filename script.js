var timer = 60;
var score = 0;
var rn = 0;

function MakeBubble() {
  var clutter = "";

  for (var i = 1; i <= 85; i++) {
    var random_num = Math.floor(Math.random() * 10);
    clutter += `<div class="Bubble">${random_num}</div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = clutter;
}
function incscore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function Runtimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#panel-bottom").innerHTML = `<h1 id="heading"> Game Over <br> Score = ${score}</h1> `;
      document.getElementById("heading").style.color = "darkgreen";
      document.getElementById("heading").style.fontSize = "50px";
      document.getElementById("heading").style.fontFamily = "a" ;
    }
  }, 1000);
}
function GetnewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}
document.querySelector("#panel-bottom").addEventListener("click", function (e) {
  var clickednum = Number(e.target.textContent);
  if (clickednum == rn) {
    incscore();
    GetnewHit();
    MakeBubble();
  }
});

GetnewHit();
Runtimer();
MakeBubble();
