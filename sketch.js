var player;
var lazer1, lazer2, lazer1Img,lazer2Img;
var diamond, diamondImg;
var edges,leftBoundary,rightBoundary;;
function preload(){

lazer1Img = loadImage("lazer1.png");
lazer2Img = loadImage("lazer2.png");
diamondImg = loadImage("diamond.png")


}


function setup(){
    var canvas = createCanvas(600,800);

var lazer1 = createSprite(300,200,50,50);
lazer1.shapeColor = "red"
lazer1.addImage(lazer1Img);
lazer1.velocityX = 2
lazer1.velocityY= 0


var lazer2 = createSprite(300,100,50,50);
lazer2.addImage(lazer2Img);
lazer2.velocityX = 0
lazer2.velocityY = 2

var diamond = createSprite(400,100,40,40);
diamond.addImage(diamondImg);
diamond.scale = 0.4;

player = createSprite(300,600,50,50);
player.shapeColor = "black";

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
  
}

function draw(){
    background(160);


    if(keyIsDown(RIGHT_ARROW)){
        player.velocityX = 5;
        player.velocityY = 0;
      }
      
      if(keyIsDown(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = -5;
      }
      
      if(keyIsDown(DOWN_ARROW)){
        player.velocityX = 0;
        player.velocityY = 5;
      }
      
      if(keyIsDown(LEFT_ARROW)){
        player.velocityX = -5;
        player.velocityY = 0;
      }


      if (lazer1.isTouching(player) || lazer2.isTouching(player)){
          stroke(0);
          fill (0);
          textSize (24);
          text("player is caught", 120, 200);
          lazer1.setvelocityX(0,0);
          lazer1.setvelocityY(0,0);
          player.setVelocity(0,0);
          
      }


    //edges= createEdgeSprites();
   // lazer1.collide(edges[3]);
   // lazer1.collide(leftBoundary);
  //  lazer1.collide(rightBoundary);
    



    drawSprites();




}





