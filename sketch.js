var garden,rabbit;
var gardenImg,rabbitImg;

var appleImage;

var leafImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;

  //generating random numbers
var select_sprites = Math.round(random(1,2));
console.log(select_sprites);


  if(frameCount % 80== 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  drawSprites();

}

function createApples (){

var apple=createSprite(random(50,350),40,10,10);
apple.velocityY=3;
apple.addImage(appleImage);
apple.scale=0.05;
apple.lifetime=75;
}

function createLeaves(){
  var leaf=createSprite(random(50,350),40,10,10);
  leaf.velocityY=3;
  leaf.addImage(leafImage);
  leaf.scale=0.05;
  leaf.lifetime=75;
}