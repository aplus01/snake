import { MOVEMENT } from './snake.js';

export default class InputHandler {
  constructor(game) {
    document.addEventListener('keydown', (event) => {
      console.log(event.code);
      switch (event.code) {
        case 'ArrowUp':
          if (
            [MOVEMENT.RIGHT, MOVEMENT.LEFT, MOVEMENT.STOPPED].includes(
              game.snake.heading
            )
          )
            game.snake.move(MOVEMENT.UP);
          break;
        case 'ArrowDown':
          if (
            [MOVEMENT.RIGHT, MOVEMENT.LEFT, MOVEMENT.STOPPED].includes(
              game.snake.heading
            )
          )
            game.snake.move(MOVEMENT.DOWN);
          break;
        case 'ArrowLeft':
          if (
            [MOVEMENT.UP, MOVEMENT.DOWN, MOVEMENT.STOPPED].includes(
              game.snake.heading
            )
          )
            game.snake.move(MOVEMENT.LEFT);
          break;
        case 'ArrowRight':
          if (
            [MOVEMENT.UP, MOVEMENT.DOWN, MOVEMENT.STOPPED].includes(
              game.snake.heading
            )
          )
            game.snake.move(MOVEMENT.RIGHT);
          break;
        case 'Space':
          game.snake.stop();
          break;
      }
    });
  }
}
