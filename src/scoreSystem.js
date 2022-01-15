class ScoreSystem{

	constructor(){
		this.leftPlayer = 0;
		this.rightPlayer = 0;
	}

	updateScore(isLeft){
		if(isLeft)this.rightPlayer++;
		else this.leftPlayer++;
	}

	show(){
		textSize(32);
		text(this.leftPlayer, 32, 40);
		text(this.rightPlayer, width - 64, 40);
	}


}