export default class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 50;
    this.score = 0;
  }
  draw(player) {
    player.fillRect(
      this.x, this.y,
      this.width, this.height
    );
  }
}
