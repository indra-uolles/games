Game.Level1 = function(game) {
};

var shootTime = 0;
var bg, gifts, controls, sleighHalfWidth, sleighHalfHeight, bgV, hb, gap, isFirstGap;

Game.Level1.prototype = {
    preload: function() {
        game.onCollideSignal = new Phaser.Signal();
        game.onAfterCollideSignal = new Phaser.Signal();
        hb = new HouseBuilder(game);
        sc = new ScoreCounter(game);
        game.onCollideSignal.add(sc.onCollide, sc);
        game.onAfterCollideSignal.add(hb.onAfterCollide, hb);
    },
    shootGift: function() {
        if (this.time.now > shootTime) {
            gift = gifts.getFirstExists(false);
            if (gift) {
                gift.reset(this.player.x + 40, this.player.y + sleighHalfHeight);
                gift.body.velocity.y = +600;
                shootTime = this.time.now + 200;
            }
        }
    },
    create: function() {
        bgV = 2;
        //bg = game.add.tileSprite(0, windowHeight - 490, windowWidth, 490, 'bg');
        bg = game.add.tileSprite(0, gameHeight - 490, gameWidth, 490, 'bg');

        sleighHalfWidth = this.game.cache.getImage('sleigh').width*0.6/2;
        sleighHalfHeight = this.game.cache.getImage('sleigh').height*0.6/2;

        this.player = this.game.add.sprite(this.game.width/2 - sleighHalfWidth, 25, 'sleigh');
        this.deer = this.game.add.sprite(this.game.width/2 + 10, 36, 'deer');
        this.deer.animations.add('show');
        this.deer.animations.play('show', 10, true);

        gifts = this.game.add.group();
        gifts.enableBody = true;
        gifts.physicsBodyType = Phaser.Physics.ARCADE;
        gifts.createMultiple(10, 'gift');

        gifts.setAll('anchor.x', 0.5);
        gifts.setAll('anchor.y', 0.5);
        gifts.setAll('outOfBoundsKill', true);
        gifts.setAll('checkWorldBounds', true);

        game.world.bringToTop(this.player);

        controls = {
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.DOWN)
        };
        controls.shoot.onDown.add(this.shootGift.bind(this));

        this.timer = game.time.events.loop(3000, function(){
            var gap = this.game.rnd.realInRange(100, 350);
            var xStart = Math.max(gameWidth + 1, hb.getMaxPosX()) + gap;
            hb.addHouse(xStart, gameHeight - 196);
        }, this);

        this.labelScore = game.add.text(20, 20, "0",
            { font: "30px Arial", fill: "#ff0000" });

        game.input.onTap.add(this.onTap, this);
    },
    update: function() {
        bg.tilePosition.x -= bgV;

        hb.checkCollision(gifts);
        this.labelScore.text = sc.getScore();

        this.game.debug.text(game.time.fps, 2, 14, "#00ff00");
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