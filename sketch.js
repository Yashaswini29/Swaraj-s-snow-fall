const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var snowFall;
var snowFalls = [];

function preload() {
  bgImg = loadImage("snow1.jpg");
  //boyImg = loadImage("")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
   engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(bgImg); 
  Engine.update(engine);

  if (frameCount%30===0) {
    snowFalls.push(new SnowFall(random(50,width-50),20))
    
  }

  for (var s =0; s< snowFalls.length; s++) {
    snowFalls[s].display();
  } 

  drawSprites();
}