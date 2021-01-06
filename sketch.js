
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var mango1,mango2,mango3,mango4,mango5;
var tree1;
var boy1,bimg;
var stone1;
var slingshot;
function preload()
{
	bimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy1 = createSprite(200,575)
	boy1.addImage(bimg);
	boy1.scale=0.13;
	//Create the Bodies Here.
	ground1 = new Ground(400,650,800,20);
	mango1= new Mango(700,200)
	tree1 = new Tree(700,400,30,PI*2);
	stone1 = new Stone(175,550);
	slingshot = new SlingShot(stone1,{x:175,y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.scale=1;
  tree1.display();
  mango1.display();
  ground1.display();
  stone1.display();
  slingshot.display();
  drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
    slingshot.fly();
}


