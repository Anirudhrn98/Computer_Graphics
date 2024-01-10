function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  // line(50,50,10,50);
  // stroke(240);
  line(10,50,25,10);
  stroke(100);
  line(25,10,40,50);
  stroke(100);
  line(19,30,31,30);
  stroke(100); 
  line(50,50,50,10);
  stroke(100);
  line(50,10,80,50);
  stroke(100);
  line(80,50,80,10);
  stroke(100);
  line(90,50,120,50);
  stroke(100);
  line(90,10,120,10);
  stroke(100);
  line(105,50,105,10);
  stroke(100);
  line(130,50,130,10);
  stroke(100);
  line(130,10,160,10);
  stroke(100);
  line(160,10,160,30);
  stroke(100);  
  line(160,30,130,30);
  stroke(100);
  line(130,30,160,50);
  stroke(100);
  line(170,50,200,50);
  stroke(100);
  line(170,50,170,10);
  stroke(100);
  line(200,50,200,10);
  stroke(100);
  line(206,50,240,50);
  stroke(100);
  line(210,50,210,10);
  stroke(100);
  line(240,50,240,10);
  stroke(100);
  line(206,10,240,10);
  stroke(100);
  line(250,50,250,10);
  stroke(100);
  line(280,50,280,10);
  stroke(100);
  line(250,30,280,30);
  stroke(100);
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  triangle (10,190,12,190,25,150);
  triangle (38,190,40,190,25,150);
  triangle (15,178,20,176,35,178);
  triangle (50,190,52,190,50,150);
  triangle (78,190,80,190,50,150);
  triangle (80,190,80,150,78,150);
  triangle (90,190,90,188,120,190);
  triangle (105,190,107,190,105,150);
  triangle (90,150,90,148,120,150);
  triangle (130,190,132,190,130,150);
  triangle (130,150,132,150,160,150);
  triangle (160,150,162,150,160,170);
  triangle (160,170,162,170,130,170);
  triangle (130,170,132,170,160,190);
  triangle (170,150,172,150,170,190);
  triangle (170,190,172,190,200,190);
  triangle (200,190,202,190,200,150);
  triangle (210,190,205,190,240,190);
  triangle (210,150,205,150,240,150);
  triangle (210,150,208,150,210,190);
  triangle (240,150,238,150,240,190);
  triangle (250,190,252,190,250,150);
  triangle (280,190,282,190,280,150);
  triangle (250,170,252,170,280,170);
}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}