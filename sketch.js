const Bodies=Matter.Bodies; 
const Engine=Matter.Engine;
const World=Matter.World; 

var house1, house2, house3, house4;
var virus;
var engine;
var world;


function setup() {
  createCanvas(800,400);
  house1 = createSprite(100, 0, 200, 200);
  house2 = createSprite(700, 0, 200, 200);
  house3 = createSprite(100, 350, 200, 200);
  house4 = createSprite(700, 350, 200, 200);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0,0,0);  
  drawSprites();
}