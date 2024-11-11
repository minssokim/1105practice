let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


/*function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}
  */

function Magnet() {
  let mPos = createVector(mouseX, mouseY);
  let Magnet = p5.Vector.add(ball.pos, mPos);
  Magnet.mult(0.1);
  ball.addForce(Magnet);
}

