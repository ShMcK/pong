import Paddle from './Paddle';

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
    console.log(this.player1, this.player2);
  }
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);
  }
  render() {
    if (this.paused) { return; }
  }
}
