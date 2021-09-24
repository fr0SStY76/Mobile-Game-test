var origin;

//walls
var w1,w2,w3,w4;
//Sprites
var p1;

//Mobile Controls
var button;


function setup(){
  createCanvas(windowWidth, windowHeight);

  //walls
  w1 = createSprite(0, 800, 100, 2000);
  w2 = createSprite(700, 0, 1400, 100);
  w3 = createSprite(windowWidth, 800, 100, 2000);
  w4 = createSprite(700, windowHeight, 1400, 100);
  //Sprites
  p1 = createSprite(700, 400, 50, 50);

  //Mobile
  button = createSprite(mouseX, mouseY);
  button.visible = false;

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  w3.x = windowWidth;
  w4.y = windowHeight
  p1.x = mouseX;
  p1.y = mouseY
}
function draw(){
  background("blue");
  drawSprites();
  camera.position.x = canvas.x;
  camera.position.y = canvas.y;

  if (button.y < p1.y){
    p1.y += -2
  }
  if (button.y > p1.y){
    p1.y += 2
  }
  if (button.x < p1.x){
    p1.x += -2
  }
  if (button.x > p1.x){
    p1.x += 2
  }

  button.x = mouseX;
  button.y = mouseY;

  p1.collide(w1);
  p1.collide(w2);
  p1.collide(w3);
  p1.collide(w4);
}