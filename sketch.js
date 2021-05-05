var sword;
var PLAY=1;
var END=0;
var gameState=PLAY;
var enemy,fruitGroup,alien1,alien2,enemyGroup,monster,gameOverSound,gameOver,fruits,enemy,monsterImage,monsterImage1;
var fruitImage1,fruitImage2,fruitImage3,fruitImage4,KnifeSwooshSound,gameOverImage;


function preload(){
  swordImage=loadImage('sword.png');
  fruitImage1=loadImage('fruit1.png');
  fruitImage2=loadImage('fruit2.png');
  fruitImage3=loadImage('fruit3.png');
  fruitImage4=loadImage('fruit4.png');
  knifeSwooshSound=loadSound('knifeSwooshSound.mp3');
  gameOverSound=loadSound('gameover.mp3');
  gameOverImage=loadImage('gameover.png');
  monsterImage=loadImage('alien1.png');
  monsterImage1=loadImage('alien2.png');
}

function setup(){
  createCanvas(600,600);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  sword.setCollider('rectangle',0,0,40,40);
  score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  gameOver=createSprite(300,300,0,0);
  gameOver.addImage('gameOver',gameOverImage);
}












function draw(){
  background('lightblue');
if(gameState===PLAY){
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  
  gameOver.visible=false
  text('score:'+score,300,30);
  
  fruits();
  enemies();
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeSwooshSound.play();
    score=score+2
  }
    if(enemyGroup.isTouching(sword)){
      gameState=END;
      gameOverSound.play();
    }
  
}
 else if(gameState===END){
    
   gameOver.visible=true;
   gameOverImage.visible=true
 }
  
  drawSprites();
  }

















function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(0,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
  
     if(r==1){
      fruit.addImage(fruitImage1);
    }
    else if(r==2){
      fruit.addImage(fruitImage2);
    }
    else if(r==3){
      fruit.addImage(fruitImage3);
    }
    else {fruit.addImage(fruitImage4);
    }
      fruit.y=Math.round(random(50,340));
      fruit. velocityX=7;
  
  fruit.setLifetime  =100;  
  fruitGroup.add(fruit);
}
}
function enemies(){
  if(World.frameCount%200===0){
    monster=createSprite(0,600,20,20);
    monster.addAnimation('moving',monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=(8+(score/10));
    monster.setLifetime=600;
    enemyGroup.add(monster);
    
  }
}
