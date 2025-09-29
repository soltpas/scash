let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;
let ballRadius;
let paddleX;
let paddleY;
let paddleSpeed;
let paddleWidth;
let paddleHeight;
let m=1;
let n=1;

function setup() {
    createCanvas(600, 400);
    ballX = width / 2;
    ballY = height / 2;
    ballRadius = 15;
    paddleX = width / 2;
    paddleY = height - 50;
    paddleSpeed = 10;
    paddleWidth = 150;
    paddleHeight = 15;
}

function draw() {
    background(0);

    if (m==1){
        ballSpeedX = random(10);
    }

    if (n==1){
        ballSpeedY = random(5);
    }

    if (m==2){
        ballSpeedX = -random(10);
    }

    if (n==2){
        ballSpeedY = -random(5);
    }

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (keyIsDown(LEFT_ARROW)) {
        paddleX = paddleX - paddleSpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        paddleX = paddleX + paddleSpeed;
    }
    
    if (keyIsDown(UP_ARROW)) {
        paddleY = paddleY - paddleSpeed;
    }

    if (paddleX < ballX && 
        ballX < paddleX + paddleWidth && 
        paddleY - ballRadius < ballY &&
        ballY < paddleY ) {
        n = 2;
        }

    if (ballX + ballRadius > width) {
        m = 2;
    }

     if (ballX - ballRadius < 0) {
        m = 1;
    }

    if (ballY - ballRadius < 0) {
        n = 1;
    }

    if (ballY + ballRadius > height) {
        ballSpeedX = 0;
        ballSpeedY = 0;
        textAlign(CENTER);
        textSize(50);
        text("Game Over", width / 2, height / 2);
    }

    fill("white");
    rect(paddleX, paddleY, paddleWidth, paddleHeight);
    fill(100,0,200);
    circle(ballX, ballY, ballRadius * 2);
}

