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
  render(height, width) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x > width || this.x + this.width < 0) {
        this.vx = -this.vx;
    } else if (this.y > height || this.y + this.height < 0) {
        this.vy = -this.vy;
    }
  }
}
