import p5 from 'p5';
import Paddle from './paddle';
import CollisionSystem from './collisionSystem';
import Puck from './puck';
import PaddleAI from './paddleAI';
import ScoreSystem from './scoreSystem';
import KeyControl from './keyControl';
import utility from './utility';

let Win = false;

const sketch = (p) => {

	p.setup = () => {
		let cnv = p.createCanvas(450,450);
		
		// *Utility method to stop animation on canvas click
		utility.clickStop(p,cnv);

		p.win = false;
		
		// *World for collison system
		p.world = new CollisionSystem(p);

		// *Paddle instance
		p.p1 = new Paddle(p,true);
		p.p2 = new Paddle(p,false);

		// *Puck instance
		p.puck = new Puck(p);

		p.paddleAi = new PaddleAI(p,p.p1);

		// *Score System instance
		p.score = new ScoreSystem(p);
	}

	p.draw = () => {
		p.background(0);

		// *Key Control when key is pressed
		KeyControl.pressedKey(p,p.p2);

		// *Check collision in the world
		p.world.checkCollision(p.p1,p.puck);
		if(p.world.checkCollision(p.p2,p.puck))p.paddleAi.calculateAfterPlayerPlay(p.score.leftPlayer,p.score.rightPlayer);


		p.paddleAi.AI(p.puck,p.score.leftPlayer,p.score.rightPlayer);


		// *Score board
		p.score.show();
		p.win = p.score.checkWinning();

		// *Render the paddle
		p.p1.show();
		p.p2.show();

		// *Puck update and render
		p.puck.update();
		p.puck.show();
		
		if(p.win){
			p.textSize(25);
			p.fill(255);
			p.text("Game over",p.width/2 - 50, p.height/2 - 100);
			if(p.score.leftPlayer == p.score.gamePlayPoint)p.text("You Loose!", p.width/2 - 45, p.height/2 - 50);
			else p.text('You Win!', p.width/2 - 45, p.height/2 - 50);
			p.noLoop();
		}
	}
	p.keyReleased = () => {
		if(p.key === 'ArrowUp' || p.key === 'ArrowDown')KeyControl.releasedKey(p.p2);
	}

	
}

const mySketch = new p5(sketch);
console.log(mySketch);

export {mySketch, Win};