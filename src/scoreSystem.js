export default class ScoreSystem{

	constructor(instance){
		this.instance = instance;
		this.leftPlayer = 0;
		this.rightPlayer = 0;
		this.gamePlayPoint = 5;
	}

	updateScore(isLeft){
		if(isLeft)this.rightPlayer++;
		else this.leftPlayer++;
		// return this.checkWinning();  
	}

	checkWinning(){
		if(this.leftPlayer == this.gamePlayPoint || this.rightPlayer == this.gamePlayPoint){
			return true
		}
		return false;
	}

	show(){
		this.instance.textSize(32);
		this.instance.text(this.leftPlayer, 32, 40);
		this.instance.text(this.rightPlayer, this.instance.width - 64, 40);
	}


}