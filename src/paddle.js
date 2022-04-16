import PaddleMovement from "./paddleMovt";
// * Class to render paddle

export default class Paddle extends PaddleMovement{
	
	constructor(instance,isLeft){

		super(instance);
		this.instance = instance;

		this.isLeft = isLeft;
		
		// * Paddle dimension
		this.paddleHeight = 70;
		this.paddleWidth = 10;

		// *Offset gap from the edge
		this.offsetGap = 20; //From the edge
		this.middle = this.instance.width/2;
		if(!this.isLeft)this.offsetGap = this.instance.width - (this.offsetGap + this.paddleWidth);

		this.pos = this.middle;

	}

	showLine(){
		this.instance.strokeWeight(2);
		this.instance.stroke(255);
		this.instance.line(this.offsetGap, 0, this.offsetGap ,width);

	}

	show(){
		// *Render paddle
		this.instance.strokeWeight(2);
		this.instance.fill(255);
		this.instance.rect(this.offsetGap,this.pos,this.paddleWidth,this.paddleHeight);
	}
}

