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
        this.load.image('sleigh', 'assets/images/sleigh_paper.png');
        this.load.image('bg', 'assets/images/rsz_landscape2.png');

        this.load.image('houseDarkBottomLeft', 'assets/images/tiles/houseDarkBottomLeft.png');
        this.load.image('houseDarkBottomMid', 'assets/images/tiles/houseDarkBottomMid.png');
        this.load.image('houseDarkBottomRight', 'assets/images/tiles/houseDarkBottomRight.png');
        this.load.image('houseDarkMidLeft', 'assets/images/tiles/houseDarkMidLeft.png');
        this.load.image('houseDark', 'assets/images/tiles/houseDark.png');
        this.load.image('houseDarkMidRight', 'assets/images/tiles/houseDarkMidRight.png');
        this.load.image('windowCheckered', 'assets/images/tiles/windowCheckered.png');
        this.load.image('doorTop', 'assets/images/tiles/doorTop.png');
        this.load.image('doorKnobAlt', 'assets/images/tiles/doorKnobAlt.png');
        this.load.image('roofRedRight', 'assets/images/tiles/roofRedRight.png');
        this.load.image('roofRedTopMid', 'assets/images/tiles/roofRedTopMid.png');
        this.load.image('roofRedTopLeft', 'assets/images/tiles/roofRedTopLeft.png');
        this.load.image('chimneyThin', 'assets/images/tiles/chimneyThin.png');
        this.load.image('chimneyLow', 'assets/images/tiles/chimneyLow.png');

        this.load.image('houseBeigeBottomLeft', 'assets/images/tiles/houseBeigeBottomLeft.png');
        this.load.image('houseBeigeBottomMid', 'assets/images/tiles/houseBeigeBottomMid.png');
        this.load.image('houseBeigeBottomRight', 'assets/images/tiles/houseBeigeBottomRight.png');
        this.load.image('houseBeigeMidLeft', 'assets/images/tiles/houseBeigeMidLeft.png');
        this.load.image('houseBeige', 'assets/images/tiles/houseBeige.png');
        this.load.image('houseBeigeMidRight', 'assets/images/tiles/houseBeigeMidRight.png');

        this.load.spritesheet('babka', 'assets/images/babka.png', 72, 58, 10);
        this.load.spritesheet('boy', 'assets/images/happyboy.png', 72, 58, 20);
        this.load.spritesheet('evil', 'assets/images/happyevil.png', 72, 58, 26);
    },
    create: function() {
        this.state.start('MainMenu');
    }
}