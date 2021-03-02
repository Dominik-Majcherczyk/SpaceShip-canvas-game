const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
import ship from "./canvas";
import Shard from "./Shard";
import { distance } from "./utils";

export default class Enemy {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.friction = 0.8;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: 3,
    };
    this.shards = [];
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  shatter() {
    this.radius -= 10;
    for (let i = 0; i < 8; i++) {
      this.shards.push(new Shard(this.x, this.y, 2, "red"));
    }
  }

  update() {
    if (
      this.x + this.radius + this.velocity.x > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x * this.friction;
      // this.shatter();
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    for (let i = 0; i < ship.projectiles.length; i++) {
      if (
        distance(this.x, this.y, ship.projectiles[i].x, ship.projectiles[i].y) -
          this.radius <
        0
      ) {
        this.shatter();
      }
    }
    this.draw();
  }
}
