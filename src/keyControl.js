export default class KeyControl{

	static pressedKey(instance,p2){
		// * upArrow = 38, downArrow = 40
		if (instance.keyIsDown(38)) {
			p2.up(p2);
		}else if (instance.keyIsDown(40)) {
			p2.down(p2);
		}
	}
	
	static releasedKey(p){
		p.reset();
	}
}