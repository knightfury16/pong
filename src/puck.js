// * A class to render the puck
class Puck extends PuckMovement{
	constructor(){
		super();
		this.pos = createVector(width/2,width/2);
		this.r = 10;
	}

	show(){
		strokeWeight(1);
		fill(255);
		ellipse(this.pos.x,this.pos.y,this.r*2);
	}
}