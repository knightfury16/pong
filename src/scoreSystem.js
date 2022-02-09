class ScoreSystem{

	constructor(){
		this.leftPlayer = 0;
		this.rightPlayer = 0;
		this.gamePlayPoint = 10;
	}

	updateScore(isLeft){
		if(isLeft)this.rightPlayer++;
		else this.leftPlayer++;
		this.checkWinning();  

	}

	checkWinning(){
		if(this.leftPlayer == this.gamePlayPoint || this.rightPlayer == this.gamePlayPoint){
			setTimeout(() =>{
				Win = true;
			}, 100);
		}
	}

	show(){
		textSize(32);
		text(this.leftPlayer, 32, 40);
		text(this.rightPlayer, width - 64, 40);
	}


}