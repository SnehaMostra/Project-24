
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer,plane,stone1,rubber,plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(350,350);
	plane = new Plane(600,height,1200,20);
	stone = new Stone(700,320,70,70);
	rubber = new Rubber(700,100,40);
  sand1 = new Sand(600,600);
  sand2 = new Sand(598,600);
  sand3 = new Sand(596,600);
  sand4 = new Sand(594,600);
  sand5 = new Sand(592,600);
  sand6 = new Sand(590,600);
  sand7 = new Sand(588,600);
  sand8 = new Sand(586,600);
  iron = new Iron (300,600, 80, 40);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  Engine.update(engine);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();

  drawSprites();
 
}



