let ball;


function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  //let gravity = createVector(0, 0.3);
 // ball.addForce(gravity);

  ball.update();
  ball.show();
  ball.checkEdge();
}
  

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY);
  let Magnet = p5.Vector.sub(mPos, ball.pos);
  Magnet.mult(0.08);
  ball.addForce(Magnet);
 ball.applyForce(Magnet);
}

