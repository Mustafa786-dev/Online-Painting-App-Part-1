var radius;
var color;
var clear, erase, weight, colorInput;

function setup(){
    createCanvas(windowWidth, windowHeight);
   
    clear = createButton("CLEAR");
    clear.mousePressed(resetBG);
    clear.position(100, 920);
    clear.style('width', '70');

    weight = createSlider(1, 100, 1);
    weight.style('width', '500px');
    weight.position(300, 920);

    erase = createCheckbox('ERASE', false);
    erase.position(900, 920);

    colorInput = createColorPicker('black');
    colorInput.position(1100, 920);

    background(255);
}

function draw() {
    radius = weight.value();

    stroke(0);
    strokeWeight(3);
    line(0, 890, windowWidth, 890);
}

function resetBG(){
  background(255);
}

function mouseDragged(){
  if(erase.checked()){
    stroke(255);
  }else{
    stroke(colorInput.color());
  }
  if(mouseY < 890){
  strokeWeight(radius);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed(){
  if(mouseY < 890){
    stampEllipse();
  }
}

function stampEllipse(){
  fill(colorInput.color());
  noStroke();
  ellipse(mouseX, mouseY, radius);
}