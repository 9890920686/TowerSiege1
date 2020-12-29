const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var g1,g2;
var g1b,g2b;
var bullet,bulletb;
var bulletimg

function preload() {
  bulletimg = loadImage("polygon.png") 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


g1=createSprite(800,300,100,10);
g1b=Bodies.rectangle(800,300,100,10)

World.add(world,g1b);

g2=createSprite(1000,200,100,10);
g2b=Bodies.rectangle(1000,200,100,10);

World.add(world,g2b)

bullet=createSprite(100,100,10,10)
bullet.addImage(bulletimg)

bulletb=Bodies.circle(50,200,20)

World.add(world,bulletb)
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    drawSprites();
      
}


