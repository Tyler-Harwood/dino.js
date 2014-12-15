(function () {

  var root = this;

  var DINO = DINO || {};

  DINO.Vector2d = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  };

  DINO.Vector2d.prototype.normalize = function () {
    var length = this.x * this.x + this.y * this.y;

    this.x /= length;
    this.y /= length;
  };

  DINO.Vector2d.prototype.scale = function (scaler) {
    this.x *= scaler;
    this.y *= scaler;
  };

  DINO.Vector2d.prototype.clone = function() {
    return new DINO.Vector2d(this.x, this.y);
  };

  DINO.Vector2d.prototype.constructor = DINO.Vector2d;

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
