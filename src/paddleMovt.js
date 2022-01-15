class PaddleMovement{

	constructor(){
		this.startVel = 7;
		this.vel = this.startVel;
		this.acc = 0.4;
		this.maxVel = 20;
		this.lerpValue = 0.6;
	}

	up(paddle){
		let dir = -1;
		this.update(paddle, dir);
	}
	down(paddle){
		let dir = 1;
		this.update(paddle, dir);
	}

	update(paddle, dir){
		if(this.cheklimit(paddle, dir))paddle.pos = lerp(paddle.pos, paddle.pos + this.vel * dir, this.lerpValue);
		// console.log(this.vel);
		if(this.vel <= this.maxVel)this.vel += this.acc;  
	}

	cheklimit(paddle, dir){
		let offsetTolerence = 3;

		if(paddle.pos <= offsetTolerence && dir < 0){
			paddle.pos = offsetTolerence;
			return false;
		}else if(paddle.pos + paddle.paddleHeight >= height - offsetTolerence && dir > 0)
		{
			paddle.pos = height - offsetTolerence - paddle.paddleHeight;
			return false;
		}
		return true;
	}


	reset(){
		this.vel = this.startVel;
	}
}