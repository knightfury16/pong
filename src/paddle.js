// * Class to render paddle

class Paddle extends PaddleMovement{
	
	constructor(isLeft){

		super();
		
		this.isLeft = isLeft;
		
		// * Paddle dimension
		this.paddleHeight = 70;
		this.paddleWidth = 10;

		// *Offset gap from the edge
		this.offsetGap = 20; //From the edge
		this.middle = width/2;
		if(!this.isLeft)this.offsetGap = width - (this.offsetGap + this.paddleWidth);

		this.pos = this.middle;

	}

	show(){
		// *Render paddle
		strokeWeight(2);
		fill(255);
		rect(this.offsetGap,this.pos,this.paddleWidth,this.paddleHeight);
	}
}

