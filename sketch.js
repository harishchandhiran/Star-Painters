//Creates variables.
var x,y;
var gSlider,fVal;

function setup(){
  //Creates the canvas.
  createCanvas(400,425);
  //Gives the background colour as black. 
  background(0);
  
  //Creates the slider.
  //(min,max,initial)
  gSlider = createSlider(1, 15, 4);
  //(x,y)
  gSlider.position(375, 500);
}

function draw(){

  //Gives the value of mouse position for the variables.
  x = mouseX;
  y = mouseY;

  //Gives the value of slider for fval.
  var fVal = gSlider.value();
  //Displays text named thickness.
  fill(255);
  textSize(15);
  text("Thickness",300,415);

  //Draws lines.
  if(mouseIsPressed && mouseY<400){
    stroke("white");
    strokeWeight(fVal);
    line(x,y,pmouseX,pmouseY);
  }

  //Draws the red line
  for (var i = 0; i < 410; i=i+20) {
    stroke("red");
    strokeWeight(2);
    line(i,400,i+5,400);
  }
}