// Emilie Pitre ©2016 hw5


//Inspired by Sol Lewitt's Wall Drawing 1180, which states:
//Within a circle, draw 10,000 black staight lines and 10,000 black not straight lines.
//All lines are randomly spaced and equally distributed.

// https://s-media-cache-ak0.pinimg.com/736x/1a/13/f5/1a13f510cb11b7d0143118e69c508fdd.jpg
// http://www.annemarie-verna.ch/pics/sol-lewitt-2015-2/raum4-wall-drawing.jpg

var radius = 300
var x1
var y1
var x2
var y2

function setup() {
  createCanvas(602, 602);
  background(255);
  ellipseMode(RADIUS);
}

function draw() {
  translate(width/2, height/2);
  fill(255);
  strokeWeight(2);
  ellipse(0, 0, radius);

  for (var i = 0; i < 10000; i++) {
    var x1 = random(-radius, radius);
    var y1 = random(-radius, radius);
    var x2 = random(-radius, radius);
    var y2 = random(-radius, radius);
    strokeWeight(.5);
    noFill();
    rotate(0.0005)
    line(x1, y1 + 20, x1 + 20, y1);
    arc(x2, y2, 20, 20, HALF_PI, PI);
  }

  push();
  noFill();
  strokeWeight(300);
  stroke(255);
  ellipse(0, 0, radius + 150);
  pop();
}
