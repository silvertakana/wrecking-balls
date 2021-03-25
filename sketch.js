var ball, rod,brick = [],floor,mouse,floors = 5;
var engine, world;
function preload(){

}
function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth, windowHeight);
  floor = new Box(width/2,height,width,50,true);
  ball = new Ball(0,0,50);
  mouse = new Ball(0,0,10);
  rod = new Joint(ball.body,mouse.body,50,.1)
  for (var index = 0; index < floors*2; index+=3) {
    brick[index] = new Box(700,((index/2+1)*(-70)+height),100,50)
    brick[index+1] = new Box(920,((index/2+1)*(-70)+height),100,50)
    brick[index+2] =  new Box(810,((index/2+1)*(-70)+height-50),300,50)
}
}
function draw(){
  background(220)
  Engine.update(engine);
  Matter.Body.setPosition(mouse.body,{x:mouseX,y:mouseY})
  ball.display();
  floor.display();
  rod.display()
 for (let index = 0; index < brick.length; index++) {
   brick[index].display();
 }

}
