import { Snake, Body, MOVEMENT } from './snake.js';
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
    this.buildSnake(3, start);

    this.fruit = new Fruit(this);

    this.blocks = buildLevel(this, level1);
    this.gameObjs = [this.snake, ...this.blocks, this.fruit];
  }

  restart() {
    this.snake.speed = { x: 0, y: 0 };
    this.snake.heading = MOVEMENT.STOPPED;
    this.gameSpeed = 5;
    this.snake.body = [];
    this.buildSnake(3, { x: this.gameWidth / 2, y: this.gameHeight / 2 });
  }

  update() {
    this.gameObjs.forEach((obj) => {
      obj.update();
    });
  }

  draw(ctx) {
    ctx.fillStyle = '#556b2fBF';
    ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    ctx.font = '30px Verdana';
    ctx.fillStyle = 'white';
    const score = this.snake.body.length - 3 || 0;
    ctx.fillText(
      'Score:' + score,
      3 * this.blockSize,
      this.gameHeight - 2 * this.blockSize
    );

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
