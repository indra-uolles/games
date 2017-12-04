class HousePart extends Phaser.Sprite {
  constructor(game, name) {
    super(game, 0, 0, name);
    this.exists = false;
    this.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this);
    this.body.velocity.x = -200;
  }

  stdReset(x, y) {
    this.reset(x, y);
    this.exists = true;
  }

  spawn(x, y, houseType, houseNum) {
      this.stdReset(x,y);
      this.houseType = houseType;
      this.houseNum = houseNum;
      this.body.velocity.x = -200;
      return this;
  }
}

//export default HousePart;