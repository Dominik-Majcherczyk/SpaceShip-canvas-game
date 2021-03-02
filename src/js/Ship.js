const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

import Projectile from "./Projectile";

export default class Ship {
  constructor(x, y, a, b, color) {
    this.x = x;
    this.y = y;
    this.stroke = {
      a: a,
      b: b,
    };
    this.color = color;
    this.projectiles = [];
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
    this.draw();
  }

  shoot() {
    this.projectiles.push(new Projectile(this.x, this.y, 5, 5, "orange"));
  }
}
