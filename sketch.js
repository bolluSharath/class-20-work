var mr,fr;
var o1,o1;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(200, 200, 50, 50);
  o1 = createSprite(500,400,50,50);
  o2 = createSprite(500,0,50,50);
  o1.velocityY=-5
  o2.velocityY=5
  o1.debug=true
  o2.debug=true
}

function draw() {
  background(255,255,255);  

mr.x = World.mouseX
mr.y = World.mouseY

if(mr.x - fr.x < mr.width/2 + fr.width/2 
  && fr.x - mr.x < mr.width/2 + fr.width/2 
  && mr.y - fr.y < mr.height/2 + fr.height/2
  && fr.y - mr.y < mr.height/2 + fr.height/2){

  mr.shapeColor="red";
  fr.shapeColor="red"
}else {
  mr.shapeColor="green";
  fr.shapeColor="green"
}

  if(o1.y - o2.y < o1.height/2 + o2.height/2
    && o2.y - o1.y < o1.height/2 + o2.height/2){
      o1.shapeColor="blue";
      o2.shapeColor="yellow"
    o1.velocityY=o1.velocityY * (-1);
    o2.velocityY=o2.velocityY * (-1);
  }


  drawSprites();
}