class ScoreSystem{

	constructor(){
		this.leftPlayer = 0;
		this.rightPlayer = 0;
	}

	updateScore(isLeft){
		if(isLeft)this.rightPlayer++;
		else this.leftPlayer++;
		this.checkWinning();  

	}

	checkWinning(){
		if(this.leftPlayer == 10 || this.rightPlayer == 10){
			console.log('Game Over');
			noLoop();
		}
	}

	show(){
		textSize(32);
		text(this.leftPlayer, 32, 40);
		text(this.rightPlayer, width - 64, 40);
	}


}