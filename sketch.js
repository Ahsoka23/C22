const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var imgback;
var tower1; 
function preload() {
  imgback= loadImage("assets/background.gif");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower1= new Tower(130,360,150,300)
  rectMode(CENTER);
  imageMode(CENTER)

  
 
}

function draw() {
  background(189);
  
  image(imgback,600,300,1200,600)
  Engine.update(engine);
  tower1.print();
  
   
}
