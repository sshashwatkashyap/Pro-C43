var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {

  createCanvas(800,600);
  //createSprite(400, 200, 50, 50);

  

  angleMode(DEGREES);

}

function draw() {

  background(0); 

  translate(200, 200);

  fill("white")
  ellipseMode(CENTER);
  ellipse(0, 0, 200)

  fill("black")
  stroke("grey")
  text("12", 390-500+300-200, 215-100-100-100)

  text("03", 480-500+300-200, 300-100-100-100)

  text("06", 395-500+300-200, 390-100-100-100)

  text("09", 310-500+300-200, 300-100-100-100)

  text("01", 435-500+300-200, 227-100-100-100)

  text("02", 470-500+300-200, 259-100-100-100)

  text("04", 470-500+300-200, 341-100-100-100)

  text("05", 435-500+300-200, 378-100-100-100)

  text("07", 350-500+300-200, 378-100-100-100)

  text("08", 320-500+300-200, 341-100-100-100)

  text("10", 320-500+300-200, 259-100-100-100)

  text("11", 350-500+300-200, 227-100-100-100)
  
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();

  rotate(hrAngle);
  stroke("#ff0000");
  strokeWeight(7);
  line(0, 0, 70, 0);

  pop();

  push();

  rotate(mnAngle);
  stroke("#0000ff");
  strokeWeight(7);
  line(0, 0, 70, 0);
  
  pop();

  push();

  rotate(scAngle);
  stroke("#00ff00");
  strokeWeight(7);
  line(0, 0, 70, 0);

  pop();

  drawSprites();

}