Game.Level1 = function(game) {
    this.hb = new HouseBuilder(game);
    this.sc = new ScoreCounter(game);
};

Game.Level1.prototype = {
    preload: function() {
        game.onCollideSignal = new Phaser.Signal();
        game.onAfterCollideSignal = new Phaser.Signal();
        game.onCollideSignal.add(this.sc.onCollide, this.sc);
        game.onAfterCollideSignal.add(this.hb.onAfterCollide, this.hb);
    },
    create: function() {
        var controls,
            gap = this.game.rnd.realInRange(100, 350),
            sleighHalfWidth = this.game.cache.getImage('sleigh').width*0.6/2,
            _this = this;

        this.shootTime = 0;
        this.bgV = 2;
        this.bg = game.add.tileSprite(0, gameHeight - 490, gameWidth, 490, 'bg');
        this.sleighHalfHeight = this.game.cache.getImage('sleigh').height*0.6/2,

        this.player = this.game.add.sprite(this.game.width/2 - sleighHalfWidth, 25, 'sleigh');
        this.player.scale.setTo(0.6, 0.6);
        this.deer = this.game.add.sprite(this.game.width/2 + 10, 36, 'deer');
        this.deer.scale.setTo(0.6, 0.6);
        this.deer.animations.add('show');
        this.deer.animations.play('show', 10, true);

        this.gifts = this.game.add.group();
        this.gifts.enableBody = true;
        this.gifts.physicsBodyType = Phaser.Physics.ARCADE;
        this.gifts.createMultiple(10, 'gift');

        this.gifts.setAll('anchor.x', 0.5);
        this.gifts.setAll('anchor.y', 0.5);
        this.gifts.setAll('outOfBoundsKill', true);
        this.gifts.setAll('checkWorldBounds', true);

        game.world.bringToTop(this.player);

        controls = {
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.DOWN)
        };
        controls.shoot.onDown.add(this.shootGift.bind(this));

        this.timer = game.time.events.loop(3000, function(){
            var xStart = Math.max(gameWidth + 1, _this.hb.getMaxPosX()) + gap;
            _this.hb.addHouse(xStart, gameHeight - 196);
        }, this);

        this.labelScore = game.add.text(20, 20, "0",
            { font: "30px Arial", fill: "#ff0000" });

        game.input.onTap.add(this.onTap, this);
    },
    shootGift: function() {
        if (this.time.now > this.shootTime) {
            gift = this.gifts.getFirstExists(false);
            if (gift) {
                gift.reset(this.player.x + 40, this.player.y + this.sleighHalfHeight);
                gift.body.velocity.y = +600;
                this.shootTime = this.time.now + 200;
            }
        }
    },
    update: function() {
        this.bg.tilePosition.x -= this.bgV;

        this.hb.checkCollision(this.gifts);
        this.labelScore.text = this.sc.getScore();

        game.debug.text(game.time.fps, 2, 14, "#00ff00");
    },
    onTap: function(pointer, doubleTap) {
        if (doubleTap)
        {
            this.shootGift();
        }
        else
        {
            this.shootGift();
        }

    }
}