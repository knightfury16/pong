class PaddleAI{

	constructor(p1){
		this.p1 = p1;

	}

	AI(puck){
		
		this.paddleCenter = createVector(p1.offsetGap + (p1.paddleWidth/2), p1.pos + (p1.paddleHeight/2));

		if( puck.vel.x < 0){

			let x = this.p1.offsetGap;
			let y = puck.pos.y + tan(puck.vel.heading()) * (x - puck.pos.x);
			this.intersectionPoint = createVector(x,y);
	
			// console.log('PC = ' + this.paddleCenter.y + ' PC + 35 = '+ (this.paddleCenter.y+35) + ' IP = ' + this.intersectionPoint.y);

			// console.log(this.intersectionPoint.y,this.paddleCenter.y);

			if(this.paddleCenter.y < this.intersectionPoint.y && this.paddleCenter.y + 35 < this.intersectionPoint.y){
				// doDown
				this.p1.down(this.p1);
				// console.log('Going Down');
				
			}
			else if(this.paddleCenter.y > this.intersectionPoint.y  && this.paddleCenter.y - 35 > this.intersectionPoint.y){
				// goUp
				this.p1.up(this.p1);
			}

		}
	}

	calculateDistance(puck){
		return dist(this.intersectionPoint.x,this.intersectionPoint.y,puck.pos.x,puck.pos.y);
	}





}