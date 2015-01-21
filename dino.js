(function () {

  var root = this;

  var DINO = DINO || {};

  DINO.Vector = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  };

  DINO.Vector.prototype.normalize = function () {
    var length = this.x * this.x + this.y * this.y;

    return new DINO.Vector(this.x / length, this.y / length);
  };

  DINO.Vector.prototype.scale = function (scaler) {
    return new DINO.Vector(this.x * scaler, this.y * scaler);
  };

  DINO.Vector.prototype.add = function (v) {
    return new DINO.Vector(this.x + v.x, this.y + v.y);
  };

  DINO.Vector.prototype.dot = function (v) {
     return this.x * v.x + this.y * v.y;
  };

  DINO.Vector.prototype.clone = function() {
    return new DINO.Vector(this.x, this.y);
  };

  DINO.Vector.prototype.constructor = DINO.Vector;

  DINO.Input = (function () {
    var instance;

    function init() {

      this.keyboard = {
        keyPressed: {},

        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_ENTER: 13,
        KEY_SHIFT: 16,
        KEY_CTRL: 17,
        KEY_ALT: 18,
        KEY_PAUSE: 19,
        KEY_CAPS_LOCK: 20,
        KEY_ESCAPE: 27,
        KEY_PAGE_UP: 33,
        KEY_PAGE_DOWN: 34,
        KEY_END: 35,
        KEY_HOME: 36,

        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,

        KEY_0: 48,
        KEY_1: 49,
        KEY_2: 50,
        KEY_3: 51,
        KEY_4: 52,
        KEY_5: 53,
        KEY_6: 54,
        KEY_7: 55,
        KEY_8: 56,
        KEY_9: 57,

        KEY_A: 65,
        KEY_B: 66,
        KEY_C: 67,
        KEY_D: 68,
        KEY_E: 69,
        KEY_F: 70,
        KEY_G: 71,
        KEY_H: 72,
        KEY_I: 73,
        KEY_J: 74,
        KEY_K: 75,
        KEY_L: 76,
        KEY_M: 77,
        KEY_N: 78,
        KEY_O: 79,
        KEY_P: 80,
        KEY_Q: 81,
        KEY_R: 82,
        KEY_S: 83,
        KEY_T: 84,
        KEY_U: 85,
        KEY_V: 86,
        KEY_W: 87,
        KEY_X: 88,
        KEY_Y: 89,
        KEY_Z: 90,


        isDown: function(keyCode) {
          return this.keyPressed[keyCode];
        },

        onKeydown: function(event) {
          this.keyPressed[event.keyCode] = true;
        },

        onKeyup: function(event) {
          delete this.keyPressed[event.keyCode];
        }
      };

      //TODO: Add mouse input
      this.mouse = {

      };

      window.addEventListener('keyup', function(event) { this.keyboard.onKeyup(event); }, false);
      window.addEventListener('keydown', function(event) { this.keyboard.onKeydown(event); }, false);

      return {
        Keyboard: this.keyboard,
        Mouse: this.mouse
        };
    }
    return {
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }

    };

  })();

  DINO.Vertex = function (vector, data) {
    if(this.vector === null || this.vector === undefined){
      this.vector = [];
    }
    this.vector.push(vector);
    this.data = data || null;
  };

  DINO.SmartMap = function (width, height) {
    this.map = new Array(width);
    for (var i = 0; i < width; i++) {
      this.map[i] = new Array(height);
    }
  };

  DINO.SmartMap.prototype.toggleCollision = function (v1, v2) {
    if(this.map[v1.x][v1.y] === null || this.map[v1.x][v1.y] === undefined){
      this.map[v1.x][v1.y] = new DINO.Vertex(v2);
    } else {
      this.map[v1.x][v1.y] = null;
    }
  };

  DINO.SmartMap.prototype.checkCollision = function (fromVector, toVector) {
    var direction = toVector.add(fromVector.scale(-1)).normalize();

    //Check collision on all x lines
      //Add vertices above and below collision point
    //Check collision on all y lines
      //Add vertices left and right of collision point
  };

  DINO.CheckCollision = function(a, b, c, d) {
     var e = b.add(a.scale(-1));
     var f = d.add(c.scale(-1));
     var p = new DINO.Vector(e.y * -1, e.x);

     var s = f.dot(p);

     if(s !== 0){
        //Calculate collision
        h = a.add(c.scale(-1)).dot(p) / s;
        if(h < 0 || h > 1){
           //Segments do not touch
           return null;
        }
     } else {
        //Segments are parallel
        return null;
     }

     //Return point of collision
     return c.add(f.scale(h));

     //http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
 };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = DINO;
    }
    exports.DINO = DINO;
  } else if (typeof define !== 'undefined' && define.amd) {
    define(DINO);
  } else {
    root.DINO = DINO;
  }

}).call(this);
