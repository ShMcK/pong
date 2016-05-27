import {
	p1,
	ball
} from './settings';

export default class Ball {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.size = ball.size;
		this.paddleCollisionSound = new Audio('sounds/pong-03.wav');
	}
	draw(p) {
		p.beginPath();
		p.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		p.fill();
		p.closePath();
	}
	paddleCollision(player1, player2) {
		if (this.vx > 0) {
			const inRightEnd = player2.x <= this.x + this.size &&
				player2.x > this.x - this.vx + this.size;
			if (inRightEnd) {
				const collisionDiff = this.x + this.size - player2.x;
				const k = collisionDiff / this.vx;
				const y = this.vy * k + (this.y - this.vy);
				const hitRightPaddle = y >= player2.y && y + this.size <= player2.y + player2.height;
				if (hitRightPaddle) {
					this.x = player2.x - this.size;
					this.y = Math.floor(this.y - this.vy + this.vy * k);
					this.vx = -this.vx;
					this.paddleCollisionSound.play();
				}
			}
		} else {
			const inLeftEnd = player1.x + player1.width >= this.x;
			if (inLeftEnd) {
				const collisionDiff = player1.x + player1.width - this.x;
				const k = collisionDiff / -this.vx;
				const y = this.vy * k + (this.y - this.vy);
				const hitLeftPaddle = y >= player1.y && y + this.size <= player1.y + player1.height;
				if (hitLeftPaddle) {
					this.x = player1.x + player1.width;
					this.y = Math.floor(this.y - this.vy + this.vy * k);
					this.vx = -this.vx;
					this.paddleCollisionSound.play();
				}
			}
		}
	}
	goal(player, width) {
		this.x = width / 2;
		this.y = player.y + player.height / 2;
		this.vy = Math.floor(Math.random() * 12 - 6);
		this.vx = 7 - Math.abs(this.vy);

		player.score++;

		if (player.name == p1.name) {
			this.vx *= -1;
		}

	}
	wallCollision(height) {
		const hitTop = this.vy < 0 && this.y < 0;
		const hitBottom = this.vy > 0 && this.y + this.size > height;
		if (hitTop || hitBottom) {
			this.vy = -this.vy;
		}
	}
	render(height, width, player1, player2) {
		this.x += this.vx;
		this.y += this.vy;

		this.paddleCollision(player1, player2);
		this.wallCollision(height);

		if (this.x >= width) {
			this.goal(player1, width);
		} else if (this.x + this.size <= 0) {
			this.goal(player2, width);
		}
	}
}
