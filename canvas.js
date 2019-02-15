let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.fillStyle = "blue";
c.font = "bold 16px Arial";
c.textBaseline = 'middle';
c.fillText("TEST", 100, 100);

let threshold = {
  y: window.innerHeight - 100
}

let maxRadius = 40;
let minRadius = 0;


window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init()

})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = minRadius;


  this.draw = function() {
    c.beginPath(); 
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "black";
    c.fill();
  }

  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
  
    if (this.y + radius > innerHeight || this.y - radius < innerHeight / 2) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (threshold.y - this.y < 10
      ) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    } else if (this.radius > this.minRadius) {
      this.radius -= 0.5;
    }
    this.draw();
  }
}

let circleArray = [];


function init() {

  circleArray = [] 

  for (let i = 0 ; i < 800 ; i++) {
    let radius = minRadius;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = innerHeight - (Math.random() * (70));
    let dx = (Math.random() * 0.5) * 4;
    let dy = (Math.random() * 0.5) * 4;
    circleArray.push(
      new Circle(x, y, dx, dy, radius)
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0 ; i < circleArray.length ; i++) {
    circleArray[i].update();
  }

}
init()
animate();