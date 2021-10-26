function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(17,120,116,120,116,15);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(240);
  textSize(45);
  textFont("serif");
  text("My Life is a Lie", 68, 100);
}
