let transpT = [];
var transpText;
var velocitat = 2;

function setup() {
  
  createCanvas(285, 580);
  
  noStroke();

  for(i = 0; i <= 19; i++) {
    transpT[i] = 0 + random(-750, 0);
  }
  
  transpText = -800;
  
}

function draw() {
  
  if (mouseIsPressed == true) {
    setup();
  }
  
  background(238, 236, 237);
  
  fill(0, 0, 0, transpText);
  textSize(20);
  textFont('Roboto');
  text('Classic Design', 80, 535);
  text('by Walter Ballmer', 70, 560);
  
  fill(223, 51, 49, transpT[0]);
  beginShape();
  vertex(80, 90);
  vertex(80, 140);
  vertex(30, 140);
  endShape(CLOSE);
  
  fill(246, 189, 40, transpT[1]);
  beginShape();
  vertex(130,15);
  vertex(80, 65);
  vertex(80, 140);
  vertex(130, 140);
  endShape(CLOSE);
  
  fill(0, 109, 178, transpT[2]);
  rect(130, 65, 25, 50);
  
  fill(246, 189, 40, transpT[3]);
  rect(155, 90, 50, 50);
  
  fill(0, 109, 178, transpT[4]);
  beginShape();
  vertex(80, 140);
  vertex(30, 140);
  vertex(30, 265);
  vertex(80, 215);
  endShape(CLOSE);
  
  fill(0, 0, 0, transpT[5]);
  rect(80, 140, 75, 75);
  
  fill(223, 51, 49, transpT[6]);
  rect(80, 215, 50, 50);
  
  fill(0, 109, 178, transpT[7]);
  rect(80, 265, 50, 50);
  
  fill(0, 109, 178, transpT[8]);
  rect(130, 215, 25, 50);
  
  fill(246, 189, 40, transpT[9]);
  rect(130, 265, 25, 50);
  
  fill(0, 0, 0, transpT[10]);
  rect(130, 315, 25, 25);
  
  fill(223, 51, 49, transpT[11]);
  beginShape();
  vertex(155, 265);
  vertex(205, 265);
  vertex(205, 340);
  vertex(155, 390);
  endShape(CLOSE);
  
  fill(246, 189, 40, transpT[12]);
  beginShape();
  vertex(155, 265);
  vertex(205, 265);
  vertex(205, 215);
  endShape(CLOSE);
  
  fill(0, 0, 0, transpT[13]);
  rect(205, 215, 50, 50);
  
  fill(0, 109, 178, transpT[14]);
  rect(205, 190, 50, 25);
  
  fill(246, 189, 40, transpT[15]);
  beginShape();
  vertex(205, 265);
  vertex(205, 315);
  vertex(255, 265);
  endShape(CLOSE);
  
  fill(246, 189, 40, transpT[16]);
  rect(130, 390, 25, 50);
  
  fill(0, 109, 178, transpT[17]);
  beginShape();
  vertex(130, 390);
  vertex(80, 390);
  vertex(80, 440);
  endShape(CLOSE);
  
  fill(0, 0, 0, transpT[18]);
  beginShape();
  vertex(80, 390);
  vertex(80, 340);
  vertex(30, 390);
  endShape(CLOSE);
  
  fill(246, 189, 40, transpT[19]);
  beginShape();
  vertex(80, 390);
  vertex(30, 390);
  vertex(30, 515);
  vertex(80, 465);
  endShape(CLOSE);
  
  for(i = 0; i <= 19; i++) {
    transpT[i] = transpT[i] + velocitat;
  }
  
  transpText = transpText + velocitat;
}

function deviceShaken() {

  setup();
                         
}