/*
 * Pool.js
 * Pool.constructor(game, spriteType, instances, name)
 *   game       - Reference to the game object (Phaser.Game)
 *   spriteType - We're making a pool for sprites only.
 *                SpriteType is the class (i.e. "Bullet"). (Phaser.Sprite)
 *   instances  - A number to create directly on construction. If you know you would probably
 *                need 20 bullets simultaneously, you enter 20. (integer
 *   name       - The name of the group to create (i.e. "bullets") (String)
 *
 * Pool.create(x,y,data)
 *   x,y        - position
 *   data       - Custom data that I pass on to the spawn function
 *                (i.e. "ice" for ice bullets) (any data type)
 */

class Pool extends Phaser.Group {
  constructor(game, spriteType, instances, name) {
    super(game, game.world, name);
    this.game = game;
    this.name = name;
    this.spriteType = spriteType;
    if (instances > 0) {
      let sprite;
      for (var i = 0; i < instances; i++) {
        sprite = this.add(new spriteType(game, name));
      }
    }
    return this;
  }

  create(x, y, data) {
    let obj = this.getFirstExists(false);
    if (!obj) {
      obj = new this.spriteType(this.game, this.name);
      this.add(obj, true);
    }
    return obj.spawn(x, y, data);
  }
}
//exports default Pool;