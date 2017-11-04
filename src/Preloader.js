Game.Preloader = function(game) {
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload: function() {
        var preloadHalfWidth = this.game.cache.getImage('preloaderBar').width/2;

        this.preloadBar = this.add.sprite(this.world.centerX - preloadHalfWidth, this.world.centerY, 'preloaderBar');

        this.preloadBar.anchor.setTo(0, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('menubg', 'assets/images/background.jpg');
        this.load.image('sign', 'assets/images/sign2.png');
        this.load.image('name', 'assets/images/name.png');
        this.load.image('instructions', 'assets/images/instructions.png');
        this.load.image('logo', 'assets/images/divan_logo.png');
        this.load.spritesheet('playbtn', 'assets/images/playbtn2.png', 70, 23);
        this.load.spritesheet('howtobtn', 'assets/images/howtobtn2.png', 105, 25);
        this.load.spritesheet('sharebtn', 'assets/images/sharebtn.png', 98, 25);

        this.load.image('lights', 'assets/images/lights.png');
        this.load.image('lights_bottom', 'assets/images/lights_bottom.png');
        this.load.image('lights_left', 'assets/images/lights_left.png');
        this.load.image('lights_right', 'assets/images/lights_right.png');

        this.load.image('down_arrow', 'assets/images/downarrow.png');

        this.load.image('treasure', 'assets/images/SantaGame.png');
        this.load.image('sleigh', 'assets/images/santa_sleigh.png');
        this.load.image('bg', 'assets/images/landscape.jpg');

        this.load.image('houseBeigeWalls', 'assets/images/houseBeigeWalls.png');
        this.load.image('houseBeigeChimney', 'assets/images/houseBeigeChimney.png');
        this.load.image('houseDarkChimney', 'assets/images/houseDarkChimney.png');
        this.load.image('houseDarkWalls', 'assets/images/houseDarkWalls.png');
        this.load.image('roof', 'assets/images/roof.png');
        this.load.image('windowCheckered', 'assets/images/windowCheckered.png');

        this.load.spritesheet('babka', 'assets/images/babka.png', 86, 79, 6);
        this.load.spritesheet('boy', 'assets/images/happyboy.png', 72, 58, 20);
        this.load.spritesheet('evil', 'assets/images/happyevil.png', 72, 58, 26);
    },
    create: function() {
        this.state.start('MainMenu');
    }
}