let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40;
let minRadius = 0;

let colorArray = [
  'magenta',
  'orange',
  'rgb(253, 142, 98)',
  'rgb(253, 129, 98)',
  'rgb(255, 111, 147)'
]

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

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
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]


  this.draw = function() {
    c.beginPath(); 
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "red";
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
  
    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50
      ) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    

    this.draw();
  }

}

let circleArray = [];


function init() {

  circleArray = [] 

  for (let i = 0 ; i < 800 ; i++) {
    let radius = 0;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
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