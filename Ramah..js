function createFirework(x, y) {
  const colors = ["#ff4d4d", "#ffff66", "#66ffcc", "#66a3ff", "#ff66ff"];

  for (let i = 0; i < 40; i++) {
    let particle = document.createElement("div");
    particle.className = "firework";
    document.body.appendChild(particle);

    let angle = Math.random() * 2 * Math.PI;
    let distance = Math.random() * 150;

    let color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    particle.style.left = x + "px";
    particle.style.top = y + "px";

    let xMove = Math.cos(angle) * distance;
    let yMove = Math.sin(angle) * distance;

    particle.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: "ease-out"
    });

    setTimeout(() => particle.remove(), 1000);
  }
}

// Auto fireworks
setInterval(() => {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight / 2;
  createFirework(x, y);
}, 800);

// Click for fireworks
document.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});





//SECOND FIREWORKS


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color, speed, angle) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.gravity = 0.05;
    this.alpha = 1;
    this.decay = Math.random() * 0.01 + 0.005;
    this.trail = [];
  }

  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 5) this.trail.shift();

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;

    this.speed *= 0.98;
    this.alpha -= this.decay;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.trail[0]?.x || this.x, this.trail[0]?.y || this.y);
    for (let t of this.trail) {
      ctx.lineTo(t.x, t.y);
    }
    ctx.strokeStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createFirework(x, y) {
  let colors = ["#ff3c3c", "#ffd93c", "#3cff8f", "#3ca0ff", "#ff3cf2"];
  let color = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < 120; i++) {
    let angle = Math.random() * Math.PI * 2;
    let
  }
}