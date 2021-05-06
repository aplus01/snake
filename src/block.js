export default class Block {
  constructor(position, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = 'cyan';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
