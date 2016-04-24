var xspacing = 1;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta =0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var color;

var sizeCit;
var sizeAuth;
var heighAuth;

var  img ; 

var bg ;

function preload(){
  img = loadImage("pics/background.jpg");
}

function setup() {

  var canvasLines=createCanvas(0.9*windowWidth, img.height*0.9*windowWidth/img.width);
  bg = img;
  canvasLines.parent('canvasContainer');
  //canvasLines.position(0, 0);


  w = width;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

}

function draw() {
  background(bg)

  if(windowWidth>1300){
    sizeCit=30;
    sizeAuth=20;
    heighAuth=0.2;
  } 
  else if(windowWidth>1050){
    sizeCit=25;
    sizeAuth=18;
    heighAuth=0.21;
  }
  else if(windowWidth>1050){
    sizeCit=25;
    sizeAuth=18;
    heighAuth=0.25;
  }
  else if(windowWidth>850){
    sizeCit=25;
    sizeAuth=18;
    heighAuth=0.35;
  }
  else if(windowWidth>640){
    sizeCit=23;
    sizeAuth=18;
    heighAuth=0.40;
  }
  else if(windowWidth>500){
    sizeCit=18;
    sizeAuth=15;
    heighAuth=0.5;
  }
  else {
    sizeCit=18;
    sizeAuth=15;
    heighAuth=0.65;
  }



 


  calcdots();
  //renderdots();

  calcline();
  renderline();

var c= color(0,231,173,100)
var r= color(255,231,173,100)
var d= color(255,129,129,100)

//line1
if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
  var y00 = 7*height/10  ;
  var y01 = 7*height/10 + map(mouseY+250,0,300 ,100,-100); 
  var y02 = 7*height/10 + map(mouseX/mouseY,0,300 ,100,-100); 
  var y03 = 7*height/10 + map(2*mouseY,0,300 ,-100,100); 
  var y04 = 7*height/10 + map(mouseY+250,0,300 ,-100,100); 
  var y05 = 7*height/10 + map(pow(mouseY+mouseX,0.5),0,300 ,100,-100); 
  var y06 = 7*height/10 + map(0.8*mouseY,0,300 ,-100,100); 
  var y07 = 7*height/10 + map(pow(mouseY/mouseX+250,0.8),0,300 ,-100,100); 
  var y08 = 7*height/10 + map(pow(mouseY*mouseX,0.5),0,300 ,-100,100); 
  var y09 = 7*height/10 + map(mouseY+250,0,300 ,-100,100); 
  var y10 = height/3; 
}else{
  var y00 = 7*height/10  ;
  var y01 = 7*height/10  ;
  var y02 = 7*height/10  ;
  var y03 = 7*height/10  ;
  var y04 = 7*height/10  ;
  var y05 = 7*height/10  ;
  var y06 = 7*height/10  ;
  var y07 = 7*height/10  ;
  var y08 = 7*height/10  ;
  var y09 = 7*height/10  ;
  var y10 = 7*height/10  ;
}

  stroke(c);
  fill(c);
  strokeWeight(3);

  line(1, y00,width/10,y01);
  line(width/10, y01,2*width/10,y02);
  line(2*width/10, y02,3*width/10,y03);
  line(3*width/10, y03,4*width/10,y04);
  line(4*width/10, y04,5*width/10,y05);
  line(5*width/10, y05,6*width/10,y06);
  line(6*width/10, y06,7*width/10,y07);
  line(7*width/10, y07,8*width/10,y08);
  line(8*width/10, y08,9*width/10,y09);
  line(9*width/10, y09,width-1,y10);

  /**ellipse(1,y00,4,4) 
  ellipse(width/10,y01,4,4) 
  ellipse(2*width/10,y02,4,4) 
  ellipse(3*width/10,y03,4,4) 
  ellipse(4*width/10,y04,4,4) 
  ellipse(5*width/10,y05,4,4) 
  ellipse(6*width/10,y06,4,4) 
  ellipse(7*width/10,y07,4,4) 
  ellipse(8*width/10,y08,4,4) 
  ellipse(9*width/10,y09,4,4) 
  ellipse(width-1,y10,4,4) 
**/

//line2
  if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
  var y0 = 8*height/10  ;
  var y1 = 8*height/10 + map(mouseY,0,300 ,100,-100); 
  var y2 = 8*height/10 + map(mouseX/mouseY,0,300 ,100,-100); 
  var y3 = 8*height/10 + map(mouseY/2,0,300 ,-100,100); 
  var y4 = 8*height/10 + map(mouseY*mouseX/pow(mouseY,2),0,300 ,-100,100); 
  var y5 = 8*height/10 + map(pow(mouseX,0.5),0,300 ,100,-100); 
  var y6 = 8*height/10 + map(mouseX/2,0,300 ,-100,100); 
  var y7 = 8*height/10 + map(pow(mouseX/mouseY,0.2),0,300 ,-100,100); 
  var y8 = 8*height/10 + map(pow(mouseY+mouseX,0.5),0,300 ,-100,100); 
  var y9 = 8*height/10 + map(mouseY+250,0,300 ,-100,100); 
}else{
  var y0 = 8*height/10  ;
  var y1 = 8*height/10  ;
  var y2 = 8*height/10  ;
  var y3 = 8*height/10  ;
  var y4 = 8*height/10  ;
  var y5 = 8*height/10  ;
  var y6 = 8*height/10  ;
  var y7 = 8*height/10  ;
  var y8 = 8*height/10  ;
  var y9 = 8*height/10  ;
}

  stroke(r);
  fill(r);
  strokeWeight(3);

  line(1, y0,width/9,y1);
  line(width/9, y1,2*width/9,y2);
  line(2*width/9, y2,3*width/9,y3);
  line(3*width/9, y3,4*width/9,y4);
  line(4*width/9, y4,5*width/9,y5);
  line(5*width/9, y5,6*width/9,y6);
  line(6*width/9, y6,7*width/9,y7);
  line(7*width/9, y7,8*width/9,y8);
  line(8*width/9, y8,9*width/9,y9);

 /** ellipse(1,y0,4,4) 
  ellipse(width/9,y1,4,4) 
  ellipse(2*width/9,y2,4,4) 
  ellipse(3*width/9,y3,4,4) 
  ellipse(4*width/9,y4,4,4) 
  ellipse(5*width/9,y5,4,4) 
  ellipse(6*width/9,y6,4,4) 
  ellipse(7*width/9,y7,4,4) 
  ellipse(8*width/9,y8,4,4) 
  ellipse(9*width/9-1,y9,4,4) **/

//line3
if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
  var y00 = 9*height/10  ;
  var y01 = 9*height/10 + map(mouseX/mouseY,0,300 ,75,-215); 
  var y02 = 9*height/10 + map(mouseY,0,300 ,75,-215); 
  var y03 = 9*height/10 + map(2*mouseY,0,300 ,-125,75); 
  var y04 = 9*height/10 + map(mouseY/4,0,300 ,-125,75); 
  var y05 = 9*height/10 + map(pow(mouseX,0.5),0,300 ,75,-215); 
  var y06 = 9*height/10 + map(0.8*mouseY,0,300 ,-75,125); 
  var y07 = 9*height/10 + map(pow(mouseY/mouseX+250,0.8),0,300 ,-125,75); 
  var y08 = 9*height/10 + map(pow(mouseY*mouseX,0.5),0,300 ,-125,75); 
  var y09 = 9*height/10 + map((mouseX+mouseY)/pow(mouseY,0.5),0,300 ,-125,75); 
  var y10 = 9*height/10 + map(height-mouseY,0,300 ,-125,75); 
  var y11 = 9*height/10 + map(mouseY+250,0,300 ,-125,75);
}else{
  var y00 = 9*height/10  ;
  var y01 = 9*height/10  ;
  var y02 = 9*height/10  ;
  var y03 = 9*height/10  ;
  var y04 = 9*height/10  ;
  var y05 = 9*height/10  ;
  var y06 = 9*height/10  ;
  var y07 = 9*height/10  ;
  var y08 = 9*height/10  ;
  var y09 = 9*height/10  ;
  var y10 = 9*height/10  ;
  var y11 = 9*height/10  ;
}

  stroke(d);
  fill(d);
  strokeWeight(3);

  line(1, y00,width/11,y01);
  line(width/11, y01,2*width/11,y02);
  line(2*width/11, y02,3*width/11,y03);
  line(3*width/11, y03,4*width/11,y04);
  line(4*width/11, y04,5*width/11,y05);
  line(5*width/11, y05,6*width/11,y06);
  line(6*width/11, y06,7*width/11,y07);
  line(7*width/11, y07,8*width/11,y08);
  line(8*width/11, y08,9*width/11,y09);
  line(9*width/11, y09,10*width/11,y10);
  line(10*width/11, y10,width-1,y11);

  /**ellipse(1,y00,4,4) 
  ellipse(width/11,y01,4,4) 
  ellipse(2*width/11,y02,4,4) 
  ellipse(3*width/11,y03,4,4) 
  ellipse(4*width/11,y04,4,4) 
  ellipse(5*width/11,y05,4,4) 
  ellipse(6*width/11,y06,4,4) 
  ellipse(7*width/11,y07,4,4) 
  ellipse(8*width/11,y08,4,4) 
  ellipse(9*width/11,y09,4,4) 
  ellipse(10*width/11,y10,4,4) 
  ellipse(width-1,y11,4,4) **/


}


function calcline(){

  theta += mouseX/10000;

  // For every x value, calculate a y value with sine function
  var x = theta;

  for (var i = 0; i < yvalues.length; i=i+yvalues.length/15) {
    yvalues[i] = 2*sin(x)*mouseY/4/((x/75));
    x+=dx;
  }
}

function renderline(){

}


function calcdots() {
  // Increment theta (try different values for 
  // 'angular velocity' here
  theta += mouseX/10000;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = random(img.height*0.9*windowWidth/img.width);
    x+=dx;
  }
}

/**function renderdots() {
  var x=random(255);
  var y=random(255);
  var z=random(255);
  stroke(96,96,96);
  fill(x,y,z);
  strokeWeight(0);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, yvalues[x], 2,2);
  }
  
  //for (var x = 0; x < yvalues.length; x++) {
    //ellipse(x*xspacing, height/2+yvalues[x], 1, 1);
  //}
}**/

function windowResized() {
  resizeCanvas(0.9*windowWidth, img.height*0.9*windowWidth/img.width);
}
