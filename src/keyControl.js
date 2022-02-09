class KeyControl{

	static pressedKey(){
		// Left player depricated, Ai is added
		// * w = 87, s = 83
		// if (keyIsDown(87)) {
		// 	p1.up(p1);
		// } else if (keyIsDown(83)) {
		// 	p1.down(p1);
		// }
		// * upArrow = 38, downArrow = 40
		if (keyIsDown(38)) {
			p2.up(p2);
		}else if (keyIsDown(40)) {
			p2.down(p2);
		}
	}
	
	static releasedKey(p){
		p.reset();
	}
}