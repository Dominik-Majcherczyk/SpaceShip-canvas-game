const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

export default class Projectile {
  constructor(x, y, a, b, color) {
    this.x = x;
    this.y = y;
    this.stroke = {
      a: a,
      b: b,
    };
    this.color = "orange";
    this.velocity = {
      x: 0,
      y: 5,
    };
  }

  draw() {
    c.beginPath();
    c.rect(
      this.x - this.stroke.a / 2,
      this.y - this.stroke.b / 2,
      this.stroke.a,
      this.stroke.b
    );
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.y -= this.velocity.y;
    this.draw();
  }
}
