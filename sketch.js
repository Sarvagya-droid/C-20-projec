var fixedRect, movingRect, obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  obj1 = createSprite(600, 100, 50, 80);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(800, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(1000, 100, 50, 80);
  obj3.shapeColor = "green";
  obj3.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  obj1.velocityY = -5;
  obj2.velocityY = -5;
  obj3.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff()  
  if(bounceOff(movingRect, fixedRect)){
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  
  }
  if(bounceOff(movingRect, obj1)){
    obj1.velocityY = obj1.velocityY * (-1);
  }
  
  if(bounceOff(movingRect, obj2)){
    obj2.velocityY = obj2.velocityY * (-1);
  }
  
  if(bounceOff(movingRect, obj3)){
    obj3.velocityY = obj3.velocityY * (-1);
  }
  drawSprites();
}
function bounceOff(object1, object2){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  return true;
}else{
  return false;
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  return true;
}else{
  return false;
}}
