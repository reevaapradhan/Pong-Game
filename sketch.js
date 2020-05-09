var ball,img,paddle;

function preload() {
  /* preload your images here of the ball and the paddle */
  Ball  = loadImage("ball.png");
  Paddle = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(390,200,100,10);
  ball = createSprite(200,200,10,10);
  
  /* assign the images to the sprites */
  paddle.addAnimation("paddle.png",Paddle);
  paddle.scale = 0.5;
  paddle.setCollider("rectangle",0,0,30,100);
  //paddle.debug = true;
  
  ball.addAnimation("ball.png",Ball);
  ball.scale = 0.5;
  //ball.debug=true;
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,randomVelocity);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  if(ball.bounceOff(paddle))
  {
    ball.velocityY = random(-2,2);
  }
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y =paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y =paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
    ball.velocityY= random(-10,10);
  
}

