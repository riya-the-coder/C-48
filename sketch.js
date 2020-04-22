var player;
var obstacle;
var gameState="PLAY";

var mind,happy,cry,angry,excited;
var mind, happy_img, cry_img, angry_img, excited_img;
var Sound_happy, Sound_sad, Game_Over;
var life=3;
var score;





function preload(){
  bgimg= loadImage("images/bg.jpg");
    happy_img = loadImage("images/happy.png");
    cry_img = loadImage("images/cry2.png");
       angry_img = loadImage("images/angry.png");
       excited_img = loadImage("images/excited.png");
       player_img=loadImage("images/hunter.png");
       gameOver_img=loadImage("images/gameOver.png")
       Restart_img=loadImage("images/restart.png")
      Sound_happy=loadSound("sounds/Sound_happy.wav");
     Sound_sad=loadSound("sounds/Sound_sad.wav");
    // Game_Over=loadSound("sounds/Game_Over.wav")
}
function setup(){
 canvas=createCanvas(displayWidth-20,displayHeight-30);
 player=createSprite(200,displayHeight-80,50,50);
 player.addImage(player_img);
 player.scale=0.5;
player.setCollider;
 //player.debug=true;
 score=0;
gameOver=createSprite(displayWidth/2,displayHeight/2);
Restart=createSprite(displayWidth/2,displayHeight-200);
gameOver.addImage(gameOver_img);
Restart.addImage(Restart_img);
gameOver.scale=0.5;
gameOver.visible=false;
Restart.visible=false;
//gameOver.debug=true;
 //Restart.debug=true;
ObstaclesGroup=createGroup();
HappyGroup=createGroup();
CryGroup=createGroup();
AngryGroup=createGroup();
ExcitedGroup=createGroup();
life=3;
}
function draw(){
    background(bgimg);
  
    if(gameState==="PLAY"){
        if(life>=1){
    
        
    player.x=World.mouseX;
    
    spawnEmotionsHappy();
    spawnEmotionsCry();
       spawnEmotionsAngry();
    spawnEmotionsExcited();
    spawnObstacles();
   
    if(ObstaclesGroup.isTouching(player)){
        life-=1;
     //   gameState="END";
         }

    if(life<1 || score<0){
        gameState="END";
      
    }
  if(HappyGroup.isTouching(player)|| ExcitedGroup.isTouching(player)){
    Sound_happy.play();
      score+=5;
    }
    if(CryGroup.isTouching(player)|| AngryGroup.isTouching(player)){
    score-=5;
    Sound_sad.play();
    }
}
    }
 else if(gameState==="END"){
     ObstaclesGroup.setLifetimeEach(-1);
     ObstaclesGroup.setVelocityYEach(0);
     HappyGroup.setLifetimeEach(-1);
     HappyGroup.setVelocityYEach(0);
     CryGroup.setLifetimeEach(-1);
     CryGroup.setVelocityYEach(0);
     ExcitedGroup.setLifetimeEach(-1);
     ExcitedGroup.setVelocityYEach(0);
     AngryGroup.setLifetimeEach(-1);
     AngryGroup.setVelocityYEach(0);
   
     
      //  Game_Over.play();
      if(score===0){
        textSize(40);
        fill(0);
        textFont("Comic Sans Ms");
        textStyle(BOLD);
         text("YOU ARE EMOTIONALLY TOO WEAK..TRY TO BE STRONG",100,250);
    
     }
     if(score>2 && score<500){
        textSize(40);
        fill(0);
        textFont("Comic Sans Ms");
        textStyle(BOLD);
         text("YOU SHOULD SHARE YOUR PROBLEMS WITH YOUR FRIENDS",50,250);
        
     }
     if(score>500 && score<1500){
        textSize(50);
        fill(0);
        textFont("Comic Sans Ms");
        textStyle(BOLD);
             text("JUST LISTEN TO SOME MUSIC!",400,200);
            }
            if(score>1500 && score<3000){
                textSize(50);
                fill(0);
                textFont("Comic Sans Ms");
                textStyle(BOLD);
                     text("READ SOME BOOKS!",400,200);
                    }
                    if(score>3001 && score<5000){
                        textSize(50);
                        fill(0);
                        textFont("Comic Sans Ms");
                        textStyle(BOLD);
                             text("JUST ENJOY THE BEAUTY OF NATURE!",300,200);
                            }               
     
  if(score>5001){
    textSize(50);
    fill(0);
    textFont("Comic Sans Ms");
    textStyle(BOLD);
         text("YOU ARE SUCH A STRONG PERSON!",400,200);
        }
     
    
         
     
     gameOver.visible=true;
     Restart.visible=true;
     if(mousePressedOver(Restart)){
      reset();

     }
 }

    drawSprites();
    showscore();
}
function reset(){
    gameState="PLAY";
    ObstaclesGroup.destroyEach();
    HappyGroup.destroyEach();
    CryGroup.destroyEach();
    AngryGroup.destroyEach();
    ExcitedGroup.destroyEach();
    score=0;
    life=3;
    gameOver.visible=false;
Restart.visible=false;
}
function showscore(){
    textSize(30);
    textFont("Comic Sans Ms");
    textStyle(BOLD);
    fill(0);
    text("SCORES:"+score,displayWidth-400,50); 
   // text("LIVES:"+life,displayWidth-400,100); 
}
function spawnEmotionsHappy(){
    if(World.frameCount%180===0){
        happy=createSprite(0,-20,50,50);
       HappyGroup.add(happy);
      // happy.debug=true;
        var r=Math.round(random(50,width));
        console.log(r);
        happy.x=r;
        happy.addImage(happy_img);
        happy.scale=0.3;
        happy.velocityY=3;
    }
}
function spawnEmotionsCry(){
    if(World.frameCount%320===0){
      
        cry=createSprite(0,0,50,50);
        CryGroup.add(cry);
     //   cry.debug=true;
        var r=Math.round(random(20,width));
        console.log(r);
        cry.x=r;
        cry.addImage(cry_img);
        cry.scale=0.5;
        cry.velocityY=3;
    }
}

function spawnEmotionsAngry(){
    if(World.frameCount%220===0){
        angry=createSprite(0,0,50,50);
        AngryGroup.add(angry);
      //  angry.debug=true;
        var r=Math.round(random(30,width));
        console.log(r);
        angry.x=r;
        angry.addImage(angry_img);
        angry.scale=0.3;
        angry.velocityY=3;
    }
}
function spawnEmotionsExcited(){
    if(World.frameCount%160===0){
        excited=createSprite(0,0,50,50);
      ExcitedGroup.add(excited);
      //excited.debug=true;
        var r=Math.round(random(30,width));
        console.log(r);
        excited.x=r;
        excited.addImage(excited_img);
        excited.scale=0.3;
        excited.velocityY=3;
    }
}

function spawnObstacles(){
    if(World.frameCount%140===0){
   
 obstacle=createSprite(0,-50,100,20);
// obstacle.debug=true;

 obstacle.x=Math.round(random(50,width-50));
 ObstaclesGroup.add(obstacle);
 obstacle.width=Math.round(random(600,1200));
 //obstacle.height=Math.round(random(20,200));
 var p=Math.round(random(0,255));
 var q=Math.round(random(0,255));
 var r=Math.round(random(0,255));

 obstacle.shapeColor=rgb(p,q,r);
 obstacle.velocityY=4;
 obstacle.lifetime=300;
    }
}
