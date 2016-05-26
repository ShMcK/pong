import {paddle} from './settings';

export default class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = paddle.width;
    this.height = paddle.height;
    this.score = 0;
  }
  draw(player) {
    player.fillRect(
      this.x, this.y,
      this.width, this.height
    );
  }
}
