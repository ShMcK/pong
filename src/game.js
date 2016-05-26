require('./game.css');

class Game {
  constructor() {
    const canvas = document.getElementById('game');
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext('2d');
    this.context.fillStyle = 'white';
    this.paused = false;
  }
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);
  }
  render() {
    if (this.paused) { return; }
  }
}
