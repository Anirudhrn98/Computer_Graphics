function myColorTriangle (x0, y0, r0, g0, b0,
                          x1, y1, r1, g1, b1,
                          x2, y2, r2, g2, b2)
{   
  for (x= 0; x <=500 ; ++x ) {
    for (y = 0; y <= 500; ++y) {
      E12 = (x - x0) * (y1 - y0) - (y - y0) * (x1 -x0);
      E23 = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);
      E31 = (x -x2 ) * (y0 -y2) - (y - y2) * (x0 - x2);
      Area = ((x0 - x1) * (y2 - y1) - (y0 - y1) * (x2 -x1));
      l1 = E23 /  Area;
      l2 = E31 /  Area;
      l3 = E12 /  Area;
      if (E12 >= 0 && E23 >= 0 && E31 >= 0){
        if ((0 <= l1 <= 1) && (0 <= l2 <= 1) && (0 <= l3 <= 1)){
            R = l1* r0 + l2 * r1 + l3 * r2;
            G = l1* g0 + l2 * g1 + l3 * g2;
            B = l1* b0 + l2 * b1 + l3 * b2;
          drawColorPoint(x, y, R, G, B);
        }
      }
    }
  }
}


function transformTheHouse()
{
  // return a matrix that has all of the transformations of the highest level you reached in the 
  // transformation game of last week's online assignment
  //
  
  // start with the identity matrix
  let identityMatrix = [1, 0, 0, 1, 0, 0];
  
  //Note that in P5.js 2D transformation matrices are represented as (a, b, c, d, e, f) which corresponds to this matrix:
  
//  a c e
//  b d f
//  0 0 1
  
// since the last row is always 0 0 1 it is excluded when specifying the matrices  
  translate(100,0);
  return identityMatrix;
  
  // Using translate(), rotate(), and scale() add your chain of matrices here. Remember the order of operation is from right to left
  
  // Also recall, in P5.js +y is down (in transformation game +y is up)
  // In P5.js +rotation is clockwise (and in radians by default)....in transformation game +rotation is counter-clockwise (and in degrees). 
  
  //angleMode() can be used to change the mode to degrees.
  
// For example, the solution to level 1 which required translating in y by 100, followed by a tranlation in x by 40 would be:
  
//  return translate(40,0) * translate(0,-100) * identityMatrix;
 
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup () 
{
  createCanvas (500, 500);
  doMine = true;
  scene = 1;
  backgroundColor = color(150, 150, 150);
  background (backgroundColor);
}

function draw ()
{
  if (scene == 1) doHouse();
  if (scene == 2) doTriangle();
}

//
// fills in the pixel (x, y) with the color (r,g,b)
//
function drawColorPoint (x, y, r, g, b)
{
  stroke (r, g, b);
  point (x,y);
}

function doHouse()
{
  stroke (0,0,0);
  line (0, 250, 500, 250);
  line (250, 0, 250, 500);
  
 
  //resetMatrix();
 translate (250, 250);  
 applyMatrix(transformTheHouse()); 
    
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (-25, 25, 25, -25, -25, -25);
    triangle (25, 25, 25, -25, -25, 25);
    
    fill (0, 255, 0);
    stroke (0,255,0);
    triangle (-25,-25, 25, -25, 0, -50);
    
    stroke (0,0,255);
    fill (0,0,255);
   triangle (10, 0, 10, 25, 20, 25);
   triangle (10, 0, 20, 25, 20, 0);
}

function doTriangle ()
{
  myColorTriangle (300, 400, 0, 0, 255,
                   400, 100, 0, 255, 0,
                   50, 50, 255, 0, 0);
}

function keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
}