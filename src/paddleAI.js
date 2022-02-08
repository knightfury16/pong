class PaddleAI extends AiRandomness{

	constructor(p1){
		super();
		this.p1 = p1;
	}

	AI(puck){

		this.paddleCenter = createVector(p1.offsetGap + (p1.paddleWidth/2), p1.pos + (p1.paddleHeight/2));

		if( puck.vel.x < 0){

			let x = this.p1.offsetGap;
			let y = puck.pos.y + tan(puck.vel.heading()) * (x - puck.pos.x);
			this.intersectionPoint = createVector(x,y);
	
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
}