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
    create: function() {
        bgV = 2;
        bg = game.add.tileSprite(0, 0, 400, 490, 'bg');

        sleighHalfWidth = this.game.cache.getImage('sleigh').width/2;
        sleighHalfHeight = this.game.cache.getImage('sleigh').height/2;

        this.player = this.game.add.sprite(this.game.width/2 - sleighHalfWidth, 45, 'sleigh');
        gifts = this.game.add.group();
        gifts.enableBody = true;
        gifts.physicsBodyType = Phaser.Physics.ARCADE;
        gifts.createMultiple(10, 'treasure');

        gifts.setAll('anchor.x', 0.5);
        gifts.setAll('anchor.y', 0.5);
        gifts.setAll('outOfBoundsKill', true);
        gifts.setAll('checkWorldBounds', true);

        game.world.bringToTop(this.player);

        controls = {
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.DOWN)
        };

        this.timer = game.time.events.loop(3000, function(){
            var gap = this.game.rnd.realInRange(100, 350)
            var xStart = Math.max(401, hb.getMaxPosX()) + gap;
            hb.addHouse(xStart, 490 - 70);
        }, this);

        this.labelScore = game.add.text(20, 20, "0",
            { font: "30px Arial", fill: "#ff0000" });
    },
    update: function() {
        bg.tilePosition.x -= bgV;

        if (controls.shoot.isDown) {
            this.shootGift();
        }

        hb.checkCollision(gifts);
        this.labelScore.text = sc.getScore();
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
    }
}