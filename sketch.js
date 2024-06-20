var trex ,trex_running;
var groundImage;
var invisibleGround;
var cloud, cloudImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;


  //crear sprite del suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);

  //crear sprite del suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  var rango = Math.round(random(1,20));
  console.log(rango);

}

function draw(){
  background("white")
  ground.velocityX = -2;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //salto del trex
  if(keyDown("space") && trex.y >= 100){
    trex.velocityY = -10;
  }
  //caida gravedad del trex
  trex.velocityY = trex.velocityY + 0.5;

  //evitar que el trex caiga
  trex.collide(invisibleGround);

  spawnClouds();
  drawSprites();
}

function spawnClouds(){
  if(frameCount % 60 == 0){
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
  }
}
