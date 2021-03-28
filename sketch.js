const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine, world;
var poly1;
var gro1, gro2;


function preload()
{
    
}


function setup()
{
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  poly1 = new Poly(79, 200, 60);
  gro1 = new Ground(412,318,300,10);
  gro2 = new Ground(780,189,200,10);
}

function draw()
{
 background("violet")
 poly1.display();
 gro1.display();
 gro2.display();   
 console.log("mousex"+mouseX)
 console.log("mousey"+mouseY)
}