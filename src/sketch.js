// *Global variable coz i cant have variables outside method and constructor in js
// *Used it in PuckMovement class to update score
let score;

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

	// utility.drawVector(puck.pos,puck.vel,'red');
	// console.log(tan(puck.vel.heading()));
	p1.showLine();

	let x = p1.offsetGap;
	let y = puck.pos.y + tan(puck.vel.heading()) * (x - puck.pos.x);
	stroke(255);
	strokeWeight(3);
	// line(puck.pos.x,puck.pos.y, x, y);




	// *Check collision in the world
	world.checkCollision(p1,puck);
	world.checkCollision(p2,puck);

	// *Render the paddle
	p1.show();
	p2.show();
	
	// *Puck update and render
	puck.update();
	puck.show();
	// console.log(puck.vel.mag());

	paddleAi.AI(puck,score.leftPlayer,score.rightPlayer);

	// *Key Control when key is pressed
	KeyControl.pressedKey();

}

function keyReleased(){
	if(key === 'w' || key === 's')KeyControl.releasedKey(p1);
	if(key === 'ArrowUp' || key === 'ArrowDown')KeyControl.releasedKey(p2);
}
