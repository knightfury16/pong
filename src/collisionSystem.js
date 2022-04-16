export default class CollisionSystem{

	constructor(instance){
		// * puck speed is too much, so to check the collison before the paddle boundary we add tollerence
		this.tollerence = 2;
		this.instance = instance;
	}

	checkCollision(player, puck){
		if(this.xPositionCheck(player, puck) && this.yPositionCheck(player, puck)){
			this.handleCollision(player,puck);
			return true;
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

		puck.vel.x = puck.puckSpeed * this.instance.cos(angle);
		puck.vel.y = puck.puckSpeed * this.instance.sin(angle);
	}

	mapPuckAngle(player,puck){
		let diff = puck.pos.y - player.pos;
		if(player.isLeft)return this.instance.map(diff,0,player.paddleHeight,this.instance.radians(-45),this.instance.radians(45));
		else return this.instance.map(diff,0,player.paddleHeight,this.instance.radians(255),this.instance.radians(135));
	}

}