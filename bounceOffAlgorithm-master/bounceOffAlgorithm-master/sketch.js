var fixedRect, movingRect;
var fixedObject,movingObject;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  fixedObject=createSprite(100, 100, 30, 30);
  fixedObject.shapeColor="yellow";
  movingObject=createSprite(200, 100, 30, 50)
  movingObject.shapeColor="Red";
}


function draw() {
  background(0,0,0);
  movingObject.x=World.mouseX;
  movingObject.y=World.mouseY;  
  bounceOff(movingRect, fixedRect)
  if(collision(movingObject, fixedObject)){
     movingObject.shapeColor = "blue"; 
     fixedObject.shapeColor = "blue";

    } 
  else { movingObject.shapeColor = "green";
   fixedObject.shapeColor = "green"; 
}

  drawSprites();
}







