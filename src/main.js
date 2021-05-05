import Snake from './snake.js';

let context = document.getElementById('playfield');
let ctx = context.getContext('2d');
const game = {
  GAME_WIDTH: 1024,
  GAME_HEIGHT: 768,
  BLOCK_SIZE: 16,
};
context.width = game.GAME_WIDTH;
context.height = game.GAME_HEIGHT;

ctx.fillStyle = '#00000080';
ctx.fillRect(0, 0, game.GAME_WIDTH, game.GAME_HEIGHT);

const snake = new Snake(game);

const lastTime = 0;
const start = {
  x: 4 * game.BLOCK_SIZE,
  y: 4 * game.BLOCK_SIZE,
};
buildSnake(3, start);

const buildSnake = (numberOfSegments, startingPosition) => {
  for (let i = 0; i < numberOfSegments; i++) {}
};

const gameLoop = (timestamp) => {
  let deltaTime = timestamp - lastTime;

  snake.draw(ctx, deltaTime);
};

requestAnimationFrame(gameLoop);
