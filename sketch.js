
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,

}



	engine = Engine.create();
	world = engine.world;
	groundObj=new Ground(width/2,670,width,20);
LeftSide= new Ground(800,600,20,120);
RightSide= new Ground(1100,600,20,120);
ball=Bodies.circle(300,200,20,ball_options);
  World.add(world,ball)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
 groundObj.show();
 LeftSide.show();
 RightSide.show();
 ellipse(ball.position.x,ball.position.y,20,20);
}
function keyPressed (){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
  }}


