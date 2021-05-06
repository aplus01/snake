import Game from './game.js';

let context = document.getElementById('playfield');
let ctx = context.getContext('2d');
const game = new Game();
context.width = game.gameWidth;
context.height = game.gameHeight;

let lastTime = 0;

const gameLoop = (timestamp) => {
  requestAnimationFrame(gameLoop);

  const deltaTime = (timestamp - lastTime) / 1000;
  if (deltaTime < 1 / game.gameSpeed) return;
  lastTime = timestamp;

  game.update();
  game.draw(ctx);
};

requestAnimationFrame(gameLoop);
