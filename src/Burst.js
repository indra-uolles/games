class Burst extends Phaser.Sprite {
  constructor(game, name) {
    super(game, 0, 0, name);
    this.exists = false;
    this.visible = false;
    this.scale.setTo(0.5, 0.5);
    game.physics.arcade.enable(this);
    this.body.velocity.x = -200;
    this.animations.add('show');
    this.animations.currentAnim.onComplete.add(function (sprite) {
      sprite.visible = false;
    }, this);
  }

  stdReset(x, y) {
    this.reset(x, y);
    this.exists = true;
    this.visible = false;
  }

  spawn(x, y, data) {
      this.stdReset(x,y);
      this.body.velocity.x = -200;
      this.houseNum = data.houseNum;
      return this;
  }
}