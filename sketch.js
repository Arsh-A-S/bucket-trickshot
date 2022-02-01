
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, rightWall, leftWall;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {isStatic : false, restitution : 0.3, friction:0, density:1.2};
	ball = Bodies.circle(50,400,10,ball_options);
	World.add(world,ball);

	groundObj = new Ground (width/2, 670, width, 20);
	leftWall = new Ground (900, 635, 20, 90);
	rightWall = new Ground (1100, 635, 20, 90)

	Engine.run(engine);
	ellipseMode(RADIUS);
}


function draw() {
  Engine.update(engine);	
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,10);
  groundObj.display();
  leftWall.display();
  rightWall.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.00001,y:4});
	}

	if(keyCode === LEFT_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:-0.5,y:0.5});
	}

	if(keyCode === RIGHT_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.5});
	}
}



