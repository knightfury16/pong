// import score from "./sketch";

// * Class to handle puck movement
class PuckMovement{
	constructor(){

		this.puckSpeed = 4;
		// Taking a random vector and setting its magnitude to puckSpeed 
		this.vel = p5.Vector.random2D().normalize().setMag(this.puckSpeed);

		this.limitAngle();

		
	}

	limitAngle(){
		// limit the puck angle to -45 to 45 degree during spawn time
		this.angle = random(-PI/4, PI/4);
		// set heading into that angle
		this.vel.setHeading(this.angle);
		// randomly shift the x component to go either left or right
		if(random(1) < 0.5)this.vel.x *= -1;
		// if(1)this.vel.x *= 1;

	}


	edges() { 
		// Up and down boundary
		if (this.pos.y >= height - this.r) {
			this.pos.y = height - this.r;
			this.vel.y *= -1;
		} else if (this.pos.y <= this.r) {
			this.pos.y = this.r;
			this.vel.y *= -1;
		}

		// Left and right boundary
		if (this.pos.x >= width - this.r) {
			score.updateScore(false);
			this.reset();
		} else if (this.pos.x <= this.r) {
			score.updateScore(true);
			this.reset();
		}
    }

	reset(){
		this.pos = createVector(width/2,width/2);
		this.limitAngle();
	}

	update(){
		this.pos.add(this.vel);
		this.edges();
	}
}


