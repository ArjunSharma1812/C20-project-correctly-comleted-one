var issImg, bathImg, gymImg, drinkImg, eatImg, moveImg, sleepImg, brushImg; 

var astronaut,iss;

function preload(){
  issImg = loadImage("Imgs/iss.png");
  bathImg = loadAnimation("Imgs/bath1.png", "Imgs/bath2.png");
  gymImg = loadAnimation("Imgs/gym1.png", "Imgs/gym2.png", "Imgs/gym11.png", "Imgs/gym12.png");
  drinkImg = loadAnimation("Imgs/drink1.png", "Imgs/drink2.png");
  eatImg = loadAnimation("Imgs/eat1.png", "Imgs/eat2.png");
  moveImg = loadAnimation("Imgs/move.png");
  sleepImg = loadAnimation("Imgs/sleep.png");
  brushImg = loadAnimation("Imgs/brush.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 10, 10);
  iss.addImage("iss", issImg);
  iss.scale = 0.161;

  astronaut = createSprite(300, 230, 10, 10);
  astronaut.addAnimation("astronaut", sleepImg);
  astronaut.scale = 0.1;

}

function draw() {
  background(0);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush", brushImg);
    astronaut.changeAnimation("brush",brushImg);
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gymImg);
    astronaut.changeAnimation("gym",gymImg);
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat", eatImg);
    astronaut.changeAnimation("eat",eatImg);
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath", bathImg);
    astronaut.changeAnimation("bath",bathImg);
  }
  if(keyDown("m") || astronaut.x < 10){
    astronaut.addAnimation("move", moveImg);
    astronaut.changeAnimation("move",moveImg);
    astronaut.velocityX = 5;
  }
  if(astronaut.x > 790){
    astronaut.velocityX = -5
  }
  drawSprites();
}