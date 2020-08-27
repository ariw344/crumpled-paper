const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin1, dustbin2, dustbin3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200, 600);
	console.log(paper);
	options = {
		isStatic: true,
		density: 3
	}
	ground = Bodies.rectangle(400, 695, 800, 10, options);
	//Create the Bodies Here.
	dustbin1 = Bodies.rectangle(600, 685, 100, 10, options);
	dustbin2 = Bodies.rectangle(645, 630, 10, 100, options);
	dustbin3 = Bodies.rectangle(555, 630, 10, 100, options);
	
	Engine.run(engine);
	World.add(world, ground);
	World.add(world, dustbin1);
	World.add(world, dustbin2);
	World.add(world, dustbin3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  fill(rgb(127, 127, 127))
  rect(ground.position.x, ground.position.y, 800, 10);
  fill(rgb(0, 0, 255));
  rect(dustbin1.position.x, dustbin1.position.y, 100, 10);
  rect(dustbin2.position.x, dustbin2.position.y, 10, 100);
  rect(dustbin3.position.x, dustbin3.position.y, 10, 100);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y:-30});
	}
}


