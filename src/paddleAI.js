class PaddleAI{

	constructor(p1){
		// Distance between the intersection point and puck center
		this.puckdist = Infinity;
		this.p1 = p1;
		
		this.paddleCenter = createVector(p1.offsetGap + (p1.paddleWidth/2), p1.pos + (p1.paddleHeight/2));

	}

	AI(puck){
		
		let x = this.p1.offsetGap;
		let y = puck.pos.y + tan(puck.vel.heading()) * (x - puck.pos.x);
		this.intersectionPoint = createVector(x,y);
		

		if( this.calculateDistance(puck) < this.puckdist){

			console.log(this.calculateDistance(puck));
			this.puckdist = this.calculateDistance(puck);

			if(this.intersectionPoint.y > this.paddleCenter.y ){
				// doDown
				this.p1.down(this.p1);
				
			}
			else if(this.intersectionPoint.y < this.paddleCenter.y){
				// goUp
				this.p1.up(this.p1);
			}

		}
	}

	calculateDistance(puck){
		return dist(this.intersectionPoint.x,this.intersectionPoint.y,puck.pos.x,puck.pos.y);
	}





}