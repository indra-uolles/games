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
        this.load.image('name', 'assets/images/name.png');
        this.load.image('instructions', 'assets/images/instructions.png');
        this.load.image('logo', 'assets/images/divan_logo2.png');
        this.load.spritesheet('playbtn', 'assets/images/playbtn2.png', 70, 23);
        this.load.spritesheet('howtobtn', 'assets/images/howtobtn2.png', 404, 51);

        this.load.image('crumpled', 'assets/images/crumpled.jpg');

        this.load.image('down_arrow', 'assets/images/downarrow.png');

        this.load.image('gift', 'assets/images/gift.png');
        this.load.image('sleigh', 'assets/images/santa_sleigh_upd.png');
        this.load.image('sleigh_small', 'assets/images/santa_sleigh_upd_small.png');
        this.load.spritesheet('deer', 'assets/images/deer.png', 230, 131, 11);
        this.load.image('one_deer', 'assets/images/one_deer.png');
        this.load.image('bg', 'assets/images/landscape.jpg');
        this.load.image('bg_cropped', 'assets/images/landscape_cropped.jpg');

        this.load.image('houseBeigeWalls', 'assets/images/houseBeigeWalls.png');
        this.load.image('houseBeigeWallsSmall', 'assets/images/houseBeigeWallsSmall.jpg');
        this.load.image('houseBeigeChimney', 'assets/images/houseBeigeChimney2.png');
        this.load.image('houseDarkChimney', 'assets/images/houseDarkChimney2.png');
        this.load.image('houseDarkWalls', 'assets/images/houseDarkWalls.png');
        this.load.image('houseDarkWallsSmall', 'assets/images/houseDarkWallsSmall.jpg');
        this.load.image('roof', 'assets/images/roof2.jpg');
        this.load.image('windowCheckered', 'assets/images/windowCheckered2.png');

        this.load.spritesheet('babka', 'assets/images/babka.png', 86, 79, 6);
        this.load.spritesheet('boy', 'assets/images/happyboy.png', 86, 79, 6);
        this.load.spritesheet('evil', 'assets/images/happyevil.png', 86, 79, 6);

        this.load.spritesheet('burst', 'assets/images/burst4.png', 160, 160, 5);
    },
    create: function() {
        this.state.start('MainMenu');
    }
}