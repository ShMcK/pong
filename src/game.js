import Paddle from './Paddle';
import KeyListener from './KeyListener';
import {
	p1,
	p2,
	paddle,
	scoreBoard,
	key
} from './settings';
import Ball from './Ball';
import ScoreBoard from './ScoreBoard';
import keys from './keys';

export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
		this.context.font = "30px Helvetica";
		this.paused = false;

		this.player1 = new Paddle(p1.name, paddle.gap, 0);
		this.player1.y = (this.height / 2) - (this.player1.height / 2);
		this.scoreBoard1 = new ScoreBoard(this.width / 4, scoreBoard.fromTop);

		this.player2 = new Paddle(p2.name, this.width - paddle.gap - paddle.width, 0);
		this.player2.y = (this.height / 2) - (this.player2.height / 2);
		this.scoreBoard2 = new ScoreBoard(this.width * 3 / 4, scoreBoard.fromTop);

		this.keys = new KeyListener();
		this.keys.addKeyPressListener(keys.spaceBar, () => {
			this.paused = !this.paused;
		});

		this.ball = new Ball();
		this.ball.x = this.width / 2;
		this.ball.y = this.height / 2;
		this.ball.vy = Math.floor(Math.random() * 12 - 6);
		this.ball.vx = 7 - Math.abs(this.ball.vy);
	}
	draw() {
		this.context.clearRect(0, 0, this.width, this.height);
		this.context.fillRect(this.width / 2, 0, 2, this.height);

		this.context.fillStyle = 'yellow';
		this.player1.draw(this.context);
		this.player2.draw(this.context);

		this.context.fillStyle = 'white';
		this.ball.draw(this.context);

		this.scoreBoard1.draw(this.context);
		this.scoreBoard2.draw(this.context);
	}
	movePaddle(player, upKey, downKey) {
		if (this.keys.isPressed(downKey)) {
			player.y = Math.min(this.height - player.height, player.y + 4);
		} else if (this.keys.isPressed(upKey)) {
			player.y = Math.max(0, player.y - 4);
		}
	}
	render() {
		if (this.paused) {
			return;
		}

		this.movePaddle(this.player1, p1.keys.up, p1.keys.down);
		this.movePaddle(this.player2, p2.keys.up, p2.keys.down);

		this.ball.render(this.height, this.width, this.player1, this.player2);

		this.scoreBoard1.score = this.player1.score;
		this.scoreBoard2.score = this.player2.score;
	}
}
