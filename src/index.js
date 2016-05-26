import Game from './Game';
require('./game.css');
import {fps} from './settings';

const game = new Game();

function gameLoop() {
  game.render();
  game.draw();
  setTimeout(gameLoop, fps);
}

gameLoop();
