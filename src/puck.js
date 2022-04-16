import PuckMovement from "./puckMovt";
// * A class to render the puck
export default class Puck extends PuckMovement{
	constructor(instance){
		super(instance);
		this.instance = instance; 
		this.pos = this.instance.createVector(this.instance.width/2,this.instance.width/2);
		this.r = 10;
	}

	show(){
		this.instance.strokeWeight(1);
		this.instance.fill(255);
		this.instance.ellipse(this.pos.x,this.pos.y,this.r*2);
	}
}