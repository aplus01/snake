export default class Snake {
  constructor(game) {
    this.position = {
      x: game.gameWidth * 0.5,
      y: game.gameHeight * 0.5,
    };

    this.isTail = false;
    this.isHead = false;
    this.speed = {
      x: 0,
      y: 0,
    };

    this.length = 3;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 100, 40, 40);
  }
  update(deltaTime) {
    this.position;
  }

  move(direction) {
    switch (direction) {
      case 'UP':
        this.speed.x = 0;
        this.speed.y = -1;
      case 'Down':
        this.speed.x = 0;
        this.speed.y = 1;
      case 'LEFT':
        this.speed.x = -1;
        this.speed.y = 0;
      case 'RIGHT':
        this.speed.x = 1;
        this.speed.y = 0;
    }
  }

  eat() {
    this.length++;
  }
}
