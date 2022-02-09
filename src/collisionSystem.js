class CollisionSystem{

	constructor(){
		// * puck speed is too much, so to check the collison before the paddle boundary we add tollerence
		this.tollerence = 2;
	}

	checkCollision(player, puck){
		if(this.xPositionCheck(player, puck) && this.yPositionCheck(player, puck)){
			this.handleCollision(player,puck);
		}
	}

	xPositionCheck(player, puck){
		if(player.isLeft && puck.pos.x < (player.offsetGap + player.paddleWidth) + puck.r + this.tollerence)return true;
		else if(!player.isLeft && puck.pos.x > player.offsetGap - (puck.r + this.tollerence))return true;
	}

	yPositionCheck(player, puck){
		if(puck.pos.y + puck.r > player.pos && puck.pos.y - puck.r < player.pos + player.paddleHeight)return true;
	}

	handleCollision(player,puck){
		if(player.isLeft)puck.pos.x = (player.offsetGap + player.paddleWidth) + puck.r;
		else puck.pos.x = player.offsetGap - puck.r;
		
		let angle = this.mapPuckAngle(player,puck);

		// console.log(degrees(angle));

		puck.puckSpeed = puck.afterHitPuckSpeed;

		puck.vel.x = puck.puckSpeed * cos(angle);
		puck.vel.y = puck.puckSpeed * sin(angle);
	}

	mapPuckAngle(player,puck){
		let diff = puck.pos.y - player.pos;
		if(player.isLeft)return map(diff,0,player.paddleHeight,radians(-45),radians(45));
		else return map(diff,0,player.paddleHeight,radians(255),radians(135));
	}

}