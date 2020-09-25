const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;

function setup(){
     createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box1 = new Box(200,200,50,50);
 ground1 = new Ground(200,390, 400, 20);
 box2 = new Box(220,50,50, 100);


    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    
}