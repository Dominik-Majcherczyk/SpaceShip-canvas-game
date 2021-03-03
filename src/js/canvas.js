import { randomIntFromRange, distance } from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//Objects
import Ship from "./Ship";
import Enemy from "./Enemy";

canvas.width = innerWidth;
canvas.height = innerHeight;

//utility functions
const circleRandomPosition = (orientation) => {
  if (orientation === "x") {
    return Math.random() * (innerWidth - circleRadius * 2) + circleRadius;
  } else if (orientation === "y") {
    return Math.random() * (-innerHeight - circleRadius * 2) + circleRadius;
  } else {
    return undefined;
  }
};

const mouse = {
  x: innerWidth / 2,
  y: innerHeight - 100,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("click", (event) => {
  ship.shoot();
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Implementation

let circleRadius = 30;
let ship;
let enemies;
let ticker = 0;
let randomSpawnRate = 75;

// Initialization
function init() {
  enemies = [];
  for (let i = 0; i < 20; i++) {}
  ship = new Ship(undefined, undefined, 30, 30, "black");
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  //Generating random enemies
  ticker++;
  if (ticker % randomSpawnRate == 0) {
    let x = circleRandomPosition("x");
    let y = circleRandomPosition("y");
    if (enemies.length != 0) {
      for (let i = 0; i < enemies.length; i++) {
        if (distance(x, y, enemies[i].x, enemies[i].y) - circleRadius * 2 < 0) {
          x = circleRandomPosition("x");
          y = circleRandomPosition("y");
          i = -1;
        }
      }
    }
    enemies.push(new Enemy(x, y, circleRadius, "red"));
    randomSpawnRate = randomIntFromRange(100, 200);
  }

  //Update function for animate enemies and shards
  enemies.forEach((enemy) => {
    enemy.shards.forEach((shard, index) => {
      shard.update();
      if (shard.ttl == 0) {
        enemy.shards.splice(index, 10);
      }
    });
    enemy.update();
  });

  //ship mouse following, mouse coords = ship coords
  ship.x = mouse.x;
  ship.y = mouse.y;
  ship.update();

  //generating shooting particles
  ship.projectiles.forEach((projectile, index) => {
    projectile.update();
    if (projectile.y < 0) {
      ship.projectiles.splice(index, 1);
    }
  });
}

init();
animate();

export default ship;
