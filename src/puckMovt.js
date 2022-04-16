// import score from "./sketch";
import {Vector} from 'p5';
import { mySketch } from './index';

// * Class to handle puck movement
export default class PuckMovement{
	constructor(instance){
		this.instance = instance;
		this.spawnPuckSpeed = 4;
		this.afterHitPuckSpeed = 7;
		this.height = this.instance.height;
		this.width = this.instance.width;
		this.puckSpeed = this.spawnPuckSpeed;
		// Taking a random vector and setting its magnitude to puckSpeed 
		this.vel = Vector.random2D().normalize().setMag(this.puckSpeed);

		this.limitAngle();

		
	}

	limitAngle(){
		// limit the puck angle to -45 to 45 degree during spawn time
		this.angle = this.instance.random(-this.instance.PI/4, this.instance.PI/4);
		// set heading into that angle
		this.vel.setHeading(this.angle);
		// this.vel.setHeading(2*PI);
		// randomly shift the x component to go either left or right
		if(this.instance.random(1) < 0.5)this.vel.x *= -1;
		// if(1)this.vel.x *= 1;

	}


	edges() { 
		// Up and down boundary
		if (this.pos.y >= this.height - this.r) {
			this.pos.y = this.height - this.r;
			this.vel.y *= -1;
		} else if (this.pos.y <= this.r) {
			this.pos.y = this.r;
			this.vel.y *= -1;
		}

		// Left and right boundary
		if (this.pos.x >= this.width - this.r) {
			mySketch.score.updateScore(false);
			this.reset();
		} else if (this.pos.x <= this.r) {
			mySketch.score.updateScore(true);
			this.reset();
		}
    }

	reset(){
		this.pos = this.instance.createVector(this.width/2,this.width/2);
		this.puckSpeed = this.spawnPuckSpeed; 
		this.vel.setMag(this.puckSpeed);
		this.limitAngle();
	}

	update(){
		this.pos.add(this.vel);
		this.edges();
	}
}


