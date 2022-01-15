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
		puck.vel.x *= -1;
	}

}