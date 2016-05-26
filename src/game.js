import Paddle from './Paddle';
import KeyListener from './KeyListener';
import {p1, p2} from './settings';
import Ball from './Ball';

export default class Game {
  constructor() {
    const canvas = document.getElementById('game');
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext('2d');
    this.context.fillStyle = 'white';
    this.paused = false;

    this.player1 = new Paddle(10, 0);
    this.player1.y = (this.height / 2) - (this.player1.height / 2);
    this.player2 = new Paddle(this.width - 14, 0);
    this.player2.y = (this.height / 2) - (this.player2.height / 2);

    this.keys = new KeyListener();

    this.ball = new Ball();
  }
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);

    this.player1.draw(this.context);
    this.player2.draw(this.context)
  }
  movePaddle(player, upKey, downKey) {
    if (this.keys.isPressed(downKey)) {
      console.log(player)
      player.y = Math.min(this.height - player.height, player.y + 4);
    } else if (this.keys.isPressed(upKey)) {
      player.y = Math.max(0, player.y - 4);
    }
  }
  render() {
    if (this.paused) { return; }

    this.movePaddle(this.player1, p1.keys.up, p1.keys.down);
    this.movePaddle(this.player2, p2.keys.up, p2.keys.down);
  }
}
