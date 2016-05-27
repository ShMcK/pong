import {
	paddle
} from './settings';

export default class Paddle {
	constructor(name, x, y) {
		this.x = x;
		this.y = y;
		this.width = paddle.width;
		this.height = paddle.height;
		this.score = 0;
		this.name = name;
	}
	draw(player) {
		player.fillRect(
			this.x, this.y,
			this.width, this.height
		);
	}
}
