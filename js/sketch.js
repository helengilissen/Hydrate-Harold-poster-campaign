let season = "summer";
// let product;

function preload () {
  img = loadImage ('img/achtergrond.png')
}

function setup() {
  createCanvas(1147, 1690);
  pixelDensity (1);
  frameRate (5);
 
}

function draw () {
  if (season =="spring") {
    fill ("orange")
    background ("green")
  }
  else if (season =="summer") {
    fill ("red")
    background ("orange")
  }
  else if (season =="fall") {
    fill ("purple")
    background ("red")
  }
  else if (season =="winter") {
    fill ("green");
    background ("purple")
  }

  for (let i=0;i<1147;i++){
    let y = random (height)
    let x = random (width);
    let r = random (25)
    noStroke ()
    ellipse (x,y,r,r);
  }
    print ("season: "+season);

    image (img, 0,0);
}

function keyPressed (){
  if (keyCode ==49){
    season ="summer";
  }
    else if (keyCode ==50){
    season ="spring";
  }
      else if (keyCode ==51){
    season ="winter";
  }
       else if (keyCode ==52){
    season ="fall";
  }
}


