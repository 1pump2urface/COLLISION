var movingBlock, fixedBlock
function setup() {
  createCanvas(800,400);
  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(600,200,50,90);
  movingBlock.shapeColor = "blue";
  fixedBlock.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingBlock.x = World.mouseX;
  movingBlock.y = World.mouseY;
  if (movingBlock.x - fixedBlock.x < movingBlock.width/2 + fixedBlock.width/2 && fixedBlock.x - movingBlock.x < movingBlock.width/2 + fixedBlock.width/2  &&  
    movingBlock.y - fixedBlock.y < movingBlock.height/2 + fixedBlock.height/2 && fixedBlock.y - movingBlock.y < movingBlock.height/2 + fixedBlock.height/2  ){
      movingBlock.shapeColor = "red"
      fixedBlock.shapeColor = "red"


    }
    else{
      movingBlock.shapeColor = "blue";
      fixedBlock.shapeColor = "blue";
      
    }

  drawSprites();
}