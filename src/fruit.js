export default class Fruit {
  constructor(game) {
    this.game = game;
    this.position = this.placeFruit();
    this.eaten = false;
    this.fruitImg = document.getElementById('fruit');
  }

  update() {}

  draw(ctx) {
    ctx.drawImage(
      this.fruitImg,
      this.position.x,
      this.position.y,
      this.game.blockSize,
      this.game.blockSize
    );
  }

  placeFruit() {
    const xRange = [1, 63];
    const yRange = [2, 39];

    return {
      x: this.randomPositionFromRange(xRange[0], xRange[1]),
      y: this.randomPositionFromRange(yRange[0], yRange[1]),
    };
  }

  // min and max included
  randomPositionFromRange(min, max) {
    return (
      Math.floor(Math.random() * (max - min + 1) + min) * this.game.blockSize
    );
  }
}
