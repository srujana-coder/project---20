//creating variables
var car, wall;
var speed, weight;


function setup() {
  //creating canvas
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //adding velocity to car
  car.velocityX = speed;

  //adding random values to speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //creating a rectangular sprite which represents a car
  car = createSprite(50,200,50,50);
  car.shapeColor = color(225);

  //creating a wall sprite
  wall = createSprite(1500,200,60,height/2);
  wall.shapecolor = color(80,80,80);
}

function draw() {
  background(255,255,255);
  if(wall.x - car.x <(car.width + wall.width)/2);{
  }  
car.velocityX = 0;

//deformation formula
var deformation = 0.5 *width *speed * speed/22509;

if(deformation > 180){
  car.shapeColor = color(255,0,0);
}

if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car.shapeColor = colour(0,255,0);
}
  drawSprites();
}