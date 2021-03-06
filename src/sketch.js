// *Global variable coz i cant have variables outside method and constructor in js
// *Used it in PuckMovement class to update score
let score;
let Win = false;

function setup(){
	
	let cnv = createCanvas(450,450);
	
	// *Utility method to stop animation on canvas click
	utility.clickStop(cnv);
	
	// *World for collison system
	world = new CollisionSystem();

	// *Paddle instance
	p1 = new Paddle(true);
	p2 = new Paddle(false);

	// *Puck instance
	puck = new Puck();

	paddleAi = new PaddleAI(p1);

	// *Score System instance
	score = new ScoreSystem();
	
}

function draw(){
	background(0);

	
	
	// *Score board
	score.show();

	// *Check collision in the world
	world.checkCollision(p1,puck);
	if(world.checkCollision(p2,puck))paddleAi.calculateAfterPlayerPlay(score.leftPlayer,score.rightPlayer);

	// *Render the paddle
	p1.show();
	p2.show();
	
	// *Puck update and render
	puck.update();
	puck.show();

	paddleAi.AI(puck,score.leftPlayer,score.rightPlayer);

	// *Key Control when key is pressed
	KeyControl.pressedKey();

	if(Win){
		textSize(25);
		fill(255);
		text("Game over",width/2 - 50, height/2 - 100);
		if(score.leftPlayer == score.gamePlayPoint)text("You Loose!", width/2 - 45, height/2 - 50);
		else text('You Win!', width/2 - 45, height/2 - 50);
		noLoop();
	}

}

function keyReleased(){
	// if(key === 'w' || key === 's')KeyControl.releasedKey(p1);
	if(key === 'ArrowUp' || key === 'ArrowDown')KeyControl.releasedKey(p2);
}
