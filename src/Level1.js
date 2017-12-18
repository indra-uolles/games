Game.Level1 = function(game) {
    this.hb = new HouseBuilder(game);
    this.sc = new ScoreCounter(game);
    this.gift = null;
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
            //to do: deerHalfWidth
            deerHalfWidth = 230*0.55/2,
            sleighHalfWidth = 184*0.5/2,
            bgWidth = this.game.cache.getImage('bg').width,
            bgHeight = this.game.cache.getImage('bg').height,
            _this = this;

        var newbgHeight = gameWidth*bgHeight/bgWidth;

        this.hb.init();

        this.shootTime = 0;
        this.bgV = 2;
        this.bg = game.add.tileSprite(0, gameHeight - 256, 1024, 512, 'bg');
        this.bg.tileScale.x = 0.5;
        this.bg.tileScale.y = 0.5;
        this.sleighHalfHeight = this.game.cache.getImage('sleigh').height*0.5/2,

        //magic fit :(
        this.deer = this.game.add.sprite(this.game.width/2 + sleighHalfWidth*1.5 - deerHalfWidth - 16, 41, 'deer');
        this.deer.scale.setTo(0.55, 0.55);
        this.deer.animations.add('show');
        this.deer.animations.play('show', 15, true);

        this.player = this.game.add.sprite(this.game.width/2 - sleighHalfWidth - deerHalfWidth + 29, 2, 'sleigh');
        this.player.scale.setTo(0.5, 0.5);
        this.player.frame = 0;
        var dropAnim = this.player.animations.add('drop', [1, 2, 3, 4, 5], 60, true);
        var dropEndAnim = this.player.animations.add('dropend', [6, 7, 8, 9, 0], 36, true);
        dropAnim.onComplete.add(function(sprite) {
            if (this.gift) {
                this.gift.reset(this.player.x + 90, this.player.y + 20);
                this.gift.body.velocity.y = +600;
                sprite.animations.play('dropend', 36, false);
                sprite.frame = 0;
            }
        }, this);
        dropEndAnim.onComplete.add(function(sprite) {
            sprite.animations.stop();
            sprite.frame = 0;
        }, this);

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
                this.player.animations.play('drop', 6, false);
                this.shootTime = this.time.now + 200;
                this.gift = gift;
            } else {
                this.gift = null;
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