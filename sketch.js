const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine = Engine.create();
var world = engine.world;

var ground;
var stand1,stand2,stand3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58;
var Polygon,Polygon_image;
var slingshot;

function preload()
{
	Polygon_image = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);

	//Create the Bodies Here.
    ground = new Ground(600,710,1200,05);
    stand1 = new Ground(640,460,400,20);
    stand2 = new Ground(1000,660,300,20);
    stand3 = new Ground(1000,260,300,20);
    box1 = new Box(640,430,50,50);
    box2 = new Box(690,430,50,50);
    box3 = new Box(590,430,50,50); 
    box4 = new Box(740,430,50,50);
    box5 = new Box(540,430,50,50);
    box6 = new Box(790,430,50,50);
    box7 = new Box(490,430,50,50);
    box8 = new Box(515,380,50,50);
    box9 = new Box(565,380,50,50);
    box10 = new Box(615,380,50,50);
    box11 = new Box(665,380,50,50);
    box12 = new Box(715,380,50,50);
    box13 = new Box(765,380,50,50);
    box14 = new Box(540,330,50,50);
    box15 = new Box(590,330,50,50);
    box16 = new Box(640,330,50,50);
    box17 = new Box(690,330,50,50);
    box18 = new Box(740,330,50,50);
    box19 = new Box(565,280,50,50);
    box20 = new Box(615,280,50,50);
    box21 = new Box(665,280,50,50);
    box22 = new Box(715,280,50,50);
    box23 = new Box(590,230,50,50);
    box24 = new Box(640,230,50,50);
    box25 = new Box(690,230,50,50);
    box26 = new Box(615,180,50,50);
    box27 = new Box(665,180,50,50);
    box28 = new Box(640,130,50,50);
    box29 = new Box(900,630,50,50);
    box30 = new Box(950,630,50,50);
    box31 = new Box(1000,630,50,50);
    box32 = new Box(1050,630,50,50);
    box33 = new Box(1100,630,50,50);
    box34 = new Box(925,580,50,50);
    box35 = new Box(975,580,50,50);
    box36 = new Box(1025,580,50,50);
    box37 = new Box(1075,580,50,50);
    box38 = new Box(950,530,50,50);
    box39 = new Box(1000,530,50,50);
    box40 = new Box(1050,530,50,50);
    box41 = new Box(975,480,50,50);
    box42 = new Box(1025,480,50,50);
    box43 = new Box(1000,430,50,50);
    box44 = new Box(900,230,50,50);
    box45 = new Box(950,230,50,50);
    box46 = new Box(1000,230,50,50);
    box47 = new Box(1050,230,50,50);
    box48 = new Box(1100,230,50,50);
    box49 = new Box(925,180,50,50);
    box50 = new Box(975,180,50,50);
    box51 = new Box(1025,180,50,50);
    box52 = new Box(1075,180,50,50);
    box53 = new Box(950,130,50,50);
    box54 = new Box(1000,130,50,50);
    box55 = new Box(1050,130,50,50);
    box56 = new Box(975,80,50,50);
    box57 = new Box(1025,80,50,50);
    box58 = new Box(1000,30,50,50);
    Polygon = Bodies.rectangle(150,350,75,75);
    World.add(world,Polygon);
    slingshot = new SlingShot(this.Polygon,{x:150,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  fill("blue");
  box1.display();
  fill("yellow");
  box2.display();
  fill("yellow");
  box3.display();
  fill("blue");
  box4.display();
  fill("blue");
  box5.display();
  fill("yellow");
  box6.display();
  fill("yellow");
  box7.display();
  fill("blue");
  box8.display();
  fill("yellow");
  box9.display();
  fill("blue");
  box10.display();
  fill("yellow");
  box11.display();
  fill("blue");
  box12.display();
  fill("yellow");
  box13.display();
  fill("yellow");
  box14.display();
  fill("blue");
  box15.display();
  fill("yellow");
  box16.display();
  fill("blue");
  box17.display();
  fill("yellow");
  box18.display();
  fill("blue");
  box19.display();
  fill("yellow");
  box20.display();
  fill("blue");
  box21.display();
  fill("yellow");
  box22.display();
  fill("yellow");
  box23.display();
  fill("blue");
  box24.display();
  fill("yellow");
  box25.display();
  fill("blue");
  box26.display();
  fill("yellow");
  box27.display();
  fill("yellow");
  box28.display();
  fill("blue");
  box29.display();
  fill("yellow");
  box30.display();
  fill("blue");
  box31.display();
  fill("yellow");
  box32.display();
  fill("blue");
  box33.display();
  fill("yellow");
  box34.display();
  fill("blue");
  box35.display();
  fill("yellow");
  box36.display();
  fill("blue");
  box37.display();
  fill("blue");
  box38.display();
  fill("yellow");
  box39.display();
  fill("blue");
  box40.display();
  fill("yellow");
  box41.display();
  fill("blue");
  box42.display();
  fill("blue");
  box43.display();
  fill("yellow");
  box44.display();
  fill("blue");
  box45.display();
  fill("yellow");
  box46.display();
  fill("blue");
  box47.display();
  fill("yellow");
  box48.display();
  fill("blue");
  box49.display();
  fill("yellow");
  box50.display();
  fill("blue");
  box51.display();
  fill("yellow");
  box52.display();
  fill("yellow");
  box53.display();
  fill("blue");
  box54.display();
  fill("yellow");
  box55.display();
  fill("blue");
  box56.display();
  fill("yellow");
  box57.display();
  fill("yellow");
  box58.display();
  imageMode(CENTER);
  image(Polygon_image,Polygon.position.x,Polygon.position.y,75,75);
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Body.setPosition(this.Polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.SlingShotfly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.SlingShotattach(Polygon);
  }
}