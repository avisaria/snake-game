var snake 
var foods
var head
var food

var scl = 20
var gameState = 0



function setup() {
  createCanvas(400,400);

  head = createSprite(25, 200, 20, 20);
  head.shapeColor = rgb(147, 233, 250);

  snake = []
  snake.push(head)

  foods = new Group();
  food = createSprite(300, 200, 20, 20)
  food.shapeColor = rgb(255, 82, 82)
  foods.add(food);

  edges = createEdgeSprites()

  
}



function draw() {

  background(0);  
  

  if (gameState === 0){
  move();
  eat();
 
  for (var i = snake.length - 1; i > 0; i--) {
    snake[i].x = snake[i-1].x;
    snake[i].y = snake[i-1].y;

  }

if(head.isTouching(edges)){
  gameState = 1
  head.setSpeedAndDirection(0,0);
  
}
}

  drawSprites();
}

function move(){
if(keyDown("LEFT_ARROW")){
  head.velocityX = -3
  head.velocityY = 0
}
if(keyDown("RIGHT_ARROW")){
  head.velocityX = 3
  head.velocityY = 0
}
if(keyDown("UP_ARROW")){
  head.velocityX = 0
  head.velocityY = -3
}
if(keyDown("DOWN_ARROW")){
  head.velocityX = 0
  head.velocityY = 3
}
if(keyDown("space")){
  head.velocityX = 0
  head.velocityY = 0
}
}
function eat(){
  if(head.isTouching(foods)){
    food.x  = random(20, 380) 
    food.y  = random(20, 380) 

    var body = createSprite(200 , 200, 20, 20)
    body.shapeColor = rgb(147, 233, 250);
    snake.push(body);

  
    }


}
/*
function CheckTouch(){
  //if the head is touching the food, create the food at other x and y random locations.
  //Also, create a body sprite for the snake and add it to the group
  
  if(head.isTouching(food)){
      food.x = Math.round((random(20,350)));
      food.y = Math.round((random(20,350)));
      var body = createSprite(200,200, 10, 10);
      group.add(body);
      score ++;
  }
      //if the snake is touching the edges, make the gameState as end
  if (edges.isTouching(head)){  //||  endGame())  {
    playSound("sound://category_digital/hop.mp3", false);
    gameState = "end";
    head.setSpeedAndDirection(0,0);
  }
  
  //make each body block follow the previous body and set the animation to it and then scale it
  for (var i = group.length - 1; i > 0; i--) {
    group.get(i).x = group.get(i-1).x;
    group.get(i).y = group.get(i-1).y;
    group.get(i).setAnimation("powerupYellow_1");
    group.get(i).scale = 0.5;
  }
}*/


