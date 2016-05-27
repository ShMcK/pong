export default class ScoreBoard {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.score = 0;
	}
	draw(p) {
		p.fillText(this.score, this.x, this.y);
	}
}
