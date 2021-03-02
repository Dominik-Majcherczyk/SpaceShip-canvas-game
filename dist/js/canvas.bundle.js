/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Enemy.js":
/*!*************************!*\
  !*** ./src/js/Enemy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _Shard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shard */ "./src/js/Shard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");




var Enemy = /*#__PURE__*/function () {
  function Enemy(x, y, radius, color) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.friction = 0.8;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: 3
    };
    this.shards = [];
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "shatter",
    value: function shatter() {
      this.radius -= 10;

      for (var i = 0; i < 8; i++) {
        this.shards.push(new _Shard__WEBPACK_IMPORTED_MODULE_1__["default"](this.x, this.y, 2, "red"));
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x * this.friction; // this.shatter();
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;

      for (var i = 0; i < _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].projectiles.length; i++) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["distance"])(this.x, this.y, _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].projectiles[i].x, _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].projectiles[i].y) - this.radius < 0) {
          this.shatter();
        }
      }

      this.draw();
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/js/Projectile.js":
/*!******************************!*\
  !*** ./src/js/Projectile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projectile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var Projectile = /*#__PURE__*/function () {
  function Projectile(x, y, a, b, color) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.stroke = {
      a: a,
      b: b
    };
    this.color = "orange";
    this.velocity = {
      x: 0,
      y: 5
    };
  }

  _createClass(Projectile, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.rect(this.x - this.stroke.a / 2, this.y - this.stroke.b / 2, this.stroke.a, this.stroke.b);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.y -= this.velocity.y;
      this.draw();
    }
  }]);

  return Projectile;
}();



/***/ }),

/***/ "./src/js/Shard.js":
/*!*************************!*\
  !*** ./src/js/Shard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shard; });
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ "./src/js/Enemy.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");



var Shard = /*#__PURE__*/function () {
  function Shard(x, y, radius, color) {
    _classCallCheck(this, Shard);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.gravity = 0.3;
    this.friction = 0.8;
    this.velocity = {
      x: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomIntFromRange"])(-2, 2),
      y: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomIntFromRange"])(-4, 4)
    };
    this.ttl = 100;
    this.opacity = 1;
  }

  _createClass(Shard, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = "rgba(246, 36, 89, ".concat(this.opacity, ")");
      c.shadowColor = "#E3EAEF";
      c.shadowBlur = 20;
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.y += this.gravity;
      this.draw();
    }
  }]);

  return Shard;
}();



/***/ }),

/***/ "./src/js/Ship.js":
/*!************************!*\
  !*** ./src/js/Ship.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectile */ "./src/js/Projectile.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");


var Ship = /*#__PURE__*/function () {
  function Ship(x, y, a, b, color) {
    _classCallCheck(this, Ship);

    this.x = x;
    this.y = y;
    this.stroke = {
      a: a,
      b: b
    };
    this.color = color;
    this.projectiles = [];
  }

  _createClass(Ship, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.rect(this.x - this.stroke.a / 2, this.y - this.stroke.b / 2, this.stroke.a, this.stroke.b);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "shoot",
    value: function shoot() {
      this.projectiles.push(new _Projectile__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, this.y, 5, 5, "orange"));
    }
  }]);

  return Ship;
}();



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/js/Ship.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enemy */ "./src/js/Enemy.js");

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d"); //Objects



canvas.width = innerWidth;
canvas.height = innerHeight; //utility functions

var circleRandomPosition = function circleRandomPosition(orientation) {
  if (orientation === "x") {
    return Math.random() * (innerWidth - circleRadius * 2) + circleRadius;
  } else if (orientation === "y") {
    return Math.random() * (-innerHeight - circleRadius * 2) + circleRadius;
  } else {
    return undefined;
  }
};

var mouse = {
  x: innerWidth / 2,
  y: innerHeight - 100
};
var colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"]; // Event Listeners

addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("click", function (event) {
  ship.shoot();
});
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Implementation

var circleRadius = 30;
var ship;
var enemies;
var ticker = 0;
var randomSpawnRate = 75; // Initialization

function init() {
  enemies = [];

  for (var i = 0; i < 20; i++) {}

  ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](undefined, undefined, 30, 30, "black");
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); //generating random enemies

  ticker++;

  if (ticker % randomSpawnRate == 0) {
    var x = circleRandomPosition("x");
    var y = circleRandomPosition("y");

    if (enemies.length != 0) {
      for (var i = 0; i < enemies.length; i++) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["distance"])(x, y, enemies[i].x, enemies[i].y) - circleRadius * 2 < 0) {
          x = circleRandomPosition("x");
          y = circleRandomPosition("y");
          i = -1;
        }
      }
    }

    enemies.push(new _Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, circleRadius, "red"));
    randomSpawnRate = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(100, 200);
  } //update function for animate enemies and shards


  enemies.forEach(function (enemy) {
    enemy.shards.forEach(function (shard, index) {
      shard.update();

      if (shard.ttl == 0) {
        enemy.shards.splice(index, 10);
      }
    });
    enemy.update();
  }); //ship mouse following, mouse coords = ship coords

  ship.x = mouse.x;
  ship.y = mouse.y;
  ship.update(); //generating shooting particles

  ship.projectiles.forEach(function (projectile, index) {
    projectile.update();

    if (projectile.y < 0) {
      ship.projectiles.splice(index, 1);
    }
  });
}

init();
animate();
/* harmony default export */ __webpack_exports__["default"] = (ship);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map