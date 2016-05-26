export default class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 5;
    this.height = 5;
  }
  draw(p) {
    p.fillRect(this.x, this.y, this.width, this.height);
  }
  paddleCollision(player1, player2) {
    if (this.vx > 0) {
      const inRightEnd = player2.x <= this.x + this.width &&
        player2.x > this.x - this.vx + this.width;
      if (inRightEnd) {
        const collisionDiff = this.x + this.width - player2.x;
        const k = collisionDiff / this.vx;
        const y = this.vy * k + (this.y - this.vy);
        const hitRightPaddle = y >= player2.y && y + this.height <= player2.y + player2.height;
        if (hitRightPaddle) {
          this.x = player2.x - this.width;
          this.y = Math.floor(this.y - this.vy + this.vy * k);
          this.vx = -this.vx;
        }
      }
    } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
        const collisionDiff = player1.x + player1.width - this.x;
        const k = collisionDiff / -this.vx;
        const y = this.vy * k + (this.y - this.vy);
        const hitLeftPaddle = y >= player1.y && y + this.height <= player1.y + player1.height;
        if (hitLeftPaddle) {
          this.x = player1.x + player1.width;
          this.y = Math.floor(this.y - this.vy + this.vy * k);
          this.vx = -this.vx;
        }
      }
    }
  }
  goal() {
    console.log('goal!');
  }
  wallCollision(height) {
    const hitTop = this.vy < 0 && this.y < 0;
    const hitBottom = this.vy > 0 && this.y + this.height > height;
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
      this.goal();
    } else if (this.x + this.width <= 0) {
      this.goal();
    }
  }
}
