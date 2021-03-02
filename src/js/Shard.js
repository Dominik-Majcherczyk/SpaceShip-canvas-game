const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
import Enemy from "./Enemy";
import { randomIntFromRange } from "./utils";

export default class Shard {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.gravity = 0.3;
    this.friction = 0.8;
    this.velocity = {
      x: randomIntFromRange(-2, 2),
      y: randomIntFromRange(-4, 4),
    };
    this.ttl = 100;
    this.opacity = 1;
  }
  draw() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `rgba(246, 36, 89, ${this.opacity})`;
    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 20;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.ttl -= 1;
    this.opacity -= 1 / this.ttl;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.velocity.y += this.gravity;
    this.draw();
  }
}
