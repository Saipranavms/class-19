var dragon
var cloud
var plane
var gameover
var reset
var play = 1
var end = 0
var gameState = play

function preload(){
cloudImg=loadImage("cloud1.png")
dragonImg=loadImage("Dragon1.png")
planeImg=loadImage("Plane1.png")
gameoverImg=loadImage("gm.png")
resetImg=loadImage("reset1.png")

}


function setup() {
 createCanvas(windowWidth,windowHeight)

 plane = createSprite(1250,350)
 plane.addImage(planeImg)
 plane.scale=0.2
 
 gameover = createSprite(750,150)
 gameover.addImage(gameoverImg)
 gameover.scale=0.3

 

 dragonGroup=createGroup()
 cloudGroup=createGroup()  
 
}

function draw() {
 background("skyblue")
 
 spawndragon()
 spawnclouds()

 drawSprites()

 if (gameState === play){

   
   gameover.visible=false
   

   if(keyDown("up_arrow")){
      plane.y=plane.y-4
   }

   if(keyDown("down_arrow")){
      plane.y=plane.y+4
   }

   if(dragonGroup.isTouching(plane)){
      gameState=end
      gameover.visible=true
   
   }
 }

 else if(gameState===end){
   
   
   
   dragonGroup.setvelocityxEach(0)
   cloudGroup.setvelocityxEach(0)

   
   dragonGroup.destroyEach()
   cloudGroup.destroyEach()
}
 
}

function spawndragon(){
if(frameCount%100===0){
   dragon=createSprite(100,250)
   dragon.y=Math.round(random(150,900))
   dragon.addImage(dragonImg)
   dragon.velocityX=7
   dragon.scale=0.2
   dragon.lifetime=1000
   dragonGroup.add(dragon)
}

}

function spawnclouds(){
   if(frameCount%50===0){
   cloud=createSprite(100,850,40,40)
  cloud.y = Math.round(random(250,750))
   cloud.addImage(cloudImg)
   cloud.velocityX=3
   cloud.scale=0.1
   cloud.lifetime=1000
   cloudGroup.add(cloud)
   }

}