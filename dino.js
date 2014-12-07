(function () {

  var DINO = DINO || {};

  DINO.Vector2d = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  DINO.Vector2D.prototype.normalize = function () {
    var length = this.x * this.x + this.y * this.y;

    this.x /= length;
    this.y /= length;
  }

  DINO.Vector2D.prototype.clone = function() {
    return new DINO.Vector2D(this.x, this.y);
  }


}).call(this);
