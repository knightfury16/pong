import AiRandomness from "./AIRandomness";

export default class PaddleAI extends AiRandomness{

	constructor(instance,p1){
		super(instance);
		this.instance = instance;
		this.p1 = p1;
		this.predictionSince = 0;
		this.countTime = 0.021;
		this.aiError = 0;
	}

	AI(puck,leftPlayerScore,rightPlayerScore){

		this.predictionSince += this.countTime;

		this.paddleCenter = this.instance.createVector(this.p1.offsetGap + (this.p1.paddleWidth/2), this.p1.pos + (this.p1.paddleHeight/2));

		this.lvl = this.getLevel(leftPlayerScore,rightPlayerScore);

		if( puck.vel.x < 0 && this.predictionSince >= this.lvl.aiReaction){
			// console.log('Predicted = '+ this.lvl.aiReaction);
			this.intersectionPoint = this.calculateIntersectionPoint(puck);
	
			if(this.paddleCenter.y < this.intersectionPoint.y && 
				this.paddleCenter.y + this.randomTolerence(this.p1.paddleHeight) < this.intersectionPoint.y){
					this.p1.down(this.p1);
			}
			else if(this.paddleCenter.y > this.intersectionPoint.y  && 
				this.paddleCenter.y - this.randomTolerence(this.p1.paddleHeight) > this.intersectionPoint.y){
					this.p1.up(this.p1);
			}
		}
	}

	calculateIntersectionPoint(puck){
		let x = this.p1.offsetGap;
		let y = puck.pos.y + this.instance.tan(puck.vel.heading()) * (x - puck.pos.x) + this.aiError;
		return this.instance.createVector(x,y);
	}

	calculateAfterPlayerPlay(leftPlayerScore,rightPlayerScore){
		this.aiError = this.getLevel(leftPlayerScore,rightPlayerScore).aiError;
		this.aiError = this.instance.round(this.instance.random(-this.aiError,this.aiError));
		this.predictionSince = 0;
	}
}