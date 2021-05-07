import { Snake, Body } from './snake.js';
import InputHandler from './input-handler.js';
import { buildLevel, level1 } from './level.js';
import Fruit from './fruit.js';

export default class Game {
  constructor() {
    this.gameWidth = 1024;
    this.gameHeight = 768;
    this.blockSize = 16;
    this.gameSpeed = 5;
    this.gameObjs = [];

    this.snake = new Snake(this);
    new InputHandler(this);

    const start = {
      x: 7 * this.blockSize,
      y: 4 * this.blockSize,
    };
    this.buildSnake(4, start);

    this.fruit = new Fruit(this);

    this.blocks = buildLevel(this, level1);
    this.gameObjs = [this.snake, ...this.blocks, this.fruit];
  }

  update() {
    this.gameObjs.forEach((obj) => {
      obj.update();
    });
  }

  draw(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    this.gameObjs.forEach((obj) => {
      obj.draw(ctx);
    });
  }

  buildSnake(numberOfSegments, startingPosition) {
    for (let i = 0; i < numberOfSegments; i++) {
      const bodyPosition = {
        x: startingPosition.x - i * this.blockSize,
        y: startingPosition.y,
      };

      this.snake.body.push(new Body(bodyPosition));
    }
  }
}
