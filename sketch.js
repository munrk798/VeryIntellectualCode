function setup() {
  
let canvas= createCanvas(windowWidth,windowHeight)
canvas.parent('myContainer')}

function draw() {
  background(220,220,0);
  noStroke()
  fill(120,0,130)
  rect(20,20,windowWidth,20)
  ellipse (mouseX,400,300,mouseY)
 }

