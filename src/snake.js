class Snake {
  constructor(game) {
    
    this.body = [];
    
    this.speed = {
      x: 0,
      y: 0,
    };

    this.length = 3;
  }

  draw(ctx) {
    ctx.fillStyle = 'red';

    for(let i = 0; i < this.body.length; i++)
      ctx.fillRect(this.body[i].position.x, this.body[i].position.y, this.body[i].width, this.body[i].height);
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

class Body {
  constructor(position) {
    this.position = position;
    this.isTail = false;
    this.isHead = false;
    this.width = 39;
    this.height = 39;
  }
}

export {Snake, Body}