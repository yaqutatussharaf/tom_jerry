var ground  , groundImage;
var jerry,jerryImage1,jerryImage2,jerryImage3,jerryImage4;
var tom,tomImage1,tom_R,tomFinal;


function preload() {
    //load the images
    groundImage =loadImage("garden.png");
    
    tom_R = loadAnimation("tomThree.png","tomTwo.png");
    tomImage1 = loadAnimation("tomOne.png");
    tomFinal =  loadAnimation("tomFour.png");
    
    jerryImage1 = loadImage("jerryOne.png");
    jerryImage2 = loadImage("jerryTwo.png");
    jerryImage3 = loadImage("jerryThree.png");
    jerryImage4 = loadImage("jerryFour.png");

    groundImage =loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400,100,100);
    ground.addImage(groundImage);

    tom = createSprite(660,620);
    tom.addAnimation("stand",tomImage1);
    tom.addAnimation("running",tom_R);
    tom.addAnimation("final",tomFinal);
    tom.scale = 0.15
    tom.setCollider("rectangle", 20, 0, tom.width / 2 + 40, tom.height - 10);
    


    jerry = createSprite(160,610)
    jerry.addImage(jerryImage2);
    jerry.scale = 0.13 
    jerry.setCollider("rectangle", 20, 0, jerry.width / 2 + 10, jerry.height - 10);
    
}

function draw() {

    background(255);
    if(frameCount % 30 === 0 && !(tom.isTouching(jerry))){
        var rand = Math.round(random(1,3))
        if(rand === 1){
            jerry.addImage(jerryImage1);
        }else if( rand === 2){
            jerry.addImage(jerryImage2);
        }else{
            jerry.addImage(jerryImage3);
        }
    }

    if(tom.isTouching(jerry)){
        tom.changeAnimation("final",tomFinal);
        tom.velocityX = 0;
        jerry.addImage(jerryImage4);
    }
    
    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      tom.velocityX = -2;
      tom.changeAnimation("running",tom_R);
      tom.scale = 0.18;
  }
}
