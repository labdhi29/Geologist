const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(10,100);
    iron = new Iron(300,350);
}

function draw(){
    background("black");
    Engine.update(engine);


    plane.display();
    iron.display();
    stone.display();
    rubber.display();
 
    hammer.display();
}