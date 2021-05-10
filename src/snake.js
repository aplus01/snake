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
    // 0 speed no change
    if (this.speed.x === 0 && this.speed.y === 0) return;

    const tail = this.body[this.body.length - 1];
    const head = this.body[0];

    // body collision check
    for (let b = 0; b < this.body.length; b++) {
      if (this.detectCollision(head, this.body[b])) {
        this.game.restart();
        return;
      }
    }

    // wall check
    for (let b = 0; b < this.game.blocks.length; b++) {
      if (this.detectCollision(head, this.game.blocks[b])) {
        this.game.restart();
        return;
      }
    }

    // fruit check
    if (this.detectCollision(head, this.game.fruit)) {
      this.body = [
        new Body({
          x: head.position.x + this.speed.x * this.game.blockSize,
          y: head.position.y + this.speed.y * this.game.blockSize,
        }),
        ...this.body,
      ];
      this.game.fruit.position = this.game.fruit.placeFruit();
      this.game.gameSpeed += 0.5;
      return;
    }
    // keep same size
    tail.position.x = head.position.x + this.speed.x * this.game.blockSize;
    tail.position.y = head.position.y + this.speed.y * this.game.blockSize;

    this.body = [tail, ...this.body.slice(0, this.body.length - 1)];
  }

  detectCollision(target, gameObject) {
    return (
      gameObject.position.x ===
        target.position.x + this.speed.x * this.game.blockSize &&
      gameObject.position.y ===
        target.position.y + this.speed.y * this.game.blockSize
    );
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
}

class Body {
  constructor(position) {
    this.position = position;
    this.width = 15;
    this.height = 15;
  }
}

export { Snake, Body, MOVEMENT };
