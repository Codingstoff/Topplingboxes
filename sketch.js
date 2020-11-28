const Engine = Matter.Engine; //all the laws of Physics
const World = Matter.World; //applies laws of physics on the bodies in the world
const Bodies = Matter.Bodies; //individual properties

var engine,world;
var box,box2,ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world  = engine.world;


  box = new Box(200,100,50,70)
  box2 = new Box(220,50,50,70)
  ground=new Ground(200,400,400,50)


  console.log(ground);

  var ball_options = {
                      restitution:1,density:1, friction:5
                    
                     }
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);

  box.display();
  box2.display();
  ground.display();


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);


  
}