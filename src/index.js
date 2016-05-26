import Game from './Game';
require('./game.css');

const game = new Game();

const fps = 30;

function gameLoop() {
  game.render();
  game.draw();
  setTimeout(gameLoop, fps);
}

gameLoop();
