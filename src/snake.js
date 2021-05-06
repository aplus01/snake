const MOVEMENT = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3,
  STOPPED: 4,
};

class Snake {
  constructor(game) {
    this.body = [];

    this.speed = {
      x: 0,
      y: 0,
    };

    this.game = game;
    this.heading = MOVEMENT.STOPPED;
  }

  draw(ctx) {
    this.body.forEach((segment, i) => {
      ctx.fillStyle = i === 0 ? 'red' : 'yellow';
      ctx.fillRect(
        segment.position.x,
        segment.position.y,
        segment.width,
        segment.height
      );
    });
  }

  update() {
    if (this.speed.x === 0 && this.speed.y === 0) return;

    const tail = this.body[this.body.length - 1];
    const head = this.body[0];
    tail.position.x = head.position.x + this.speed.x * this.game.blockSize;
    tail.position.y = head.position.y + this.speed.y * this.game.blockSize;

    this.body = [tail, ...this.body.slice(0, this.body.length - 1)];
  }

  move(direction) {
    switch (direction) {
      case MOVEMENT.UP:
        this.heading = MOVEMENT.UP;
        this.speed.x = 0;
        this.speed.y = -1;
        break;
      case MOVEMENT.DOWN:
        this.heading = MOVEMENT.DOWN;
        this.speed.x = 0;
        this.speed.y = 1;
        break;
      case MOVEMENT.LEFT:
        this.heading = MOVEMENT.LEFT;
        this.speed.x = -1;
        this.speed.y = 0;
        break;
      case MOVEMENT.RIGHT:
        this.heading = MOVEMENT.RIGHT;
        this.speed.x = 1;
        this.speed.y = 0;
        break;
    }
  }

  stop() {
    this.speed.x = 0;
    this.speed.y = 0;
    this.heading = MOVEMENT.STOPPED;
  }

  eat() {}
}

class Body {
  constructor(position) {
    this.position = position;
    this.width = 15;
    this.height = 15;
  }
}

export { Snake, Body, MOVEMENT };
