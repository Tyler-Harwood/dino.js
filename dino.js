(function () {

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

  DINO.Input = function () {
    return function () {
      var Key = {
        _pressed: {},

        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,

        isDown: function(keyCode) {
          return this._pressed[keyCode];
        },

        onKeydown: function(event) {
          this._pressed[event.keyCode] = true;
        },

        onKeyup: function(event) {
          delete this._pressed[event.keyCode];
        }
      };

      window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
      window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
    };
  };

}).call(this);
