class AiRandomness{

	constructor(){
		this.Levels = [
			{aiReaction: 0.1, aiError:  5}, // 0:  ai is losing by 9
			{aiReaction: 0.2, aiError:  7}, // 0:  ai is losing by 8
			{aiReaction: 0.3, aiError:  9}, // 1:  ai is losing by 7
			{aiReaction: 0.4, aiError: 11}, // 2:  ai is losing by 6
			{aiReaction: 0.5, aiError: 13}, // 3:  ai is losing by 5
			{aiReaction: 0.6, aiError: 15}, // 4:  ai is losing by 4
			{aiReaction: 0.7, aiError: 17}, // 5:  ai is losing by 3
			{aiReaction: 0.8, aiError: 19}, // 6:  ai is losing by 2
			{aiReaction: 0.9, aiError: 21}, // 7:  ai is losing by 1
			{aiReaction: 1.0, aiError: 23}, // 8:  tie
			{aiReaction: 1.1, aiError: 25}, // 9:  ai is winning by 1
			{aiReaction: 1.2, aiError: 27}, // 10: ai is winning by 2
			{aiReaction: 1.3, aiError: 29}, // 11: ai is winning by 3
			{aiReaction: 1.4, aiError: 31}, // 12: ai is winning by 4
			{aiReaction: 1.5, aiError: 33}, // 13: ai is winning by 5
			{aiReaction: 1.6, aiError: 35}, // 14: ai is winning by 6
			{aiReaction: 1.7, aiError: 37}, // 15: ai is winning by 7
			{aiReaction: 1.8, aiError: 39},  // 16: ai is winning by 8
			{aiReaction: 1.9, aiError: 41} // 0:  ai is losing by 9

		]
	}

	getLevel(leftPlayerscore,rightPlayerScore){
		if(rightPlayerScore - leftPlayerscore == 9){
			return this.Levels[0];

		}else if(rightPlayerScore - leftPlayerscore == 8){
			return this.Levels[1];
			
		}else if(rightPlayerScore - leftPlayerscore == 7){
			return this.Levels[2];

		}else if(rightPlayerScore - leftPlayerscore == 6){
			return this.Levels[3];

		}else if(rightPlayerScore - leftPlayerscore == 5){
			return this.Levels[4];
			
		}else if(rightPlayerScore - leftPlayerscore == 4){
			return this.Levels[5];
			
		}else if(rightPlayerScore - leftPlayerscore == 3){
			return this.Levels[6];
			
		}else if(rightPlayerScore - leftPlayerscore == 2){
			return this.Levels[7];
			
		}else if(rightPlayerScore - leftPlayerscore == 1){
			return this.Levels[8];
			
		}else if(rightPlayerScore - leftPlayerscore == 0){
			return this.Levels[9];
			
		}else if(rightPlayerScore - leftPlayerscore == -1){
			return this.Levels[10];
			
		}else if(rightPlayerScore - leftPlayerscore == -2){
			return this.Levels[11];
			
		}else if(rightPlayerScore - leftPlayerscore == -3){
			return this.Levels[12];
			
		}else if(rightPlayerScore - leftPlayerscore == -4){
			return this.Levels[13];
			
		}else if(rightPlayerScore - leftPlayerscore == -5){
			return this.Levels[14];
			
		}else if(rightPlayerScore - leftPlayerscore == -6){
			return this.Levels[15];
			
		}else if(rightPlayerScore - leftPlayerscore == -7){
			return this.Levels[16];
			
		}else if(rightPlayerScore - leftPlayerscore == -8){
			return this.Levels[17];
			
		}else if(rightPlayerScore - leftPlayerscore == -9){
			return this.Levels[18];
			
		}
	}


	randomTolerence(paddleHeight){
		return round(random(5,paddleHeight/2));
	}



}