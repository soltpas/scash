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
let r;
let h;
let score=0;

function setup() {
    createCanvas(600, 400);
    h = height - floor(random(50));
    ballX = 0;
    ballY = 0;
    ballRadius = 15;
    paddleX = width / 2;
    paddleY = h;
    paddleSpeed = 10;
    paddleWidth = 150;
    paddleHeight = 15;
    r = random(25);
}

function draw() {
    background(0);

    if (m==1){
        ballSpeedX = random(r);
    }

    if (n==1){
        ballSpeedY = random(5);
    }

    if (m==2){
        ballSpeedX = -random(r);
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

    if (keyIsDown(DOWN_ARROW)) {
        paddleY = h;
    }

    if (paddleX < ballX && 
        ballX < paddleX + paddleWidth && 
        paddleY - ballRadius < ballY &&
        ballY < paddleY ) {
        n = 2;
        score = score + 100;
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

        text("Game End", width / 2, height / 2);
        if (score < 1000){
            fill("blue");
            textSize(30);
            text("Don't mind", width / 2 + 8, height / 2 + 30);
        }

        if (score >= 1000 && score < 5000){
            fill("skyblue");
            textSize(30);
            text("Nice", width / 2 + 10, height / 2 + 30);
        }

        if (score >= 5000 && score < 10000){
            fill("green");
            textSize(30);
            text("Great!", width / 2 + 10, height / 2 + 30);
        }

        if (score >= 10000 && score < 100000){
            fill("red");
            textSize(30);
            text("Fantastic!", width / 2 + 10, height / 2 + 30);
        }

         if (score >= 100000){
            fill("gold");
            textSize(30);
            text("You are god!", width / 2 + 10, height / 2 + 30);
        }

    }

    textAlign(LEFT);
    textSize(20);
    text("SCORE:" + score,0,20);

    fill("white");
    rect(paddleX, paddleY, paddleWidth, paddleHeight);
    fill(100,0,200);
    circle(ballX, ballY, ballRadius * 2);
}

