export default class Preloader {
    constructor () {
        this.preloadBar = null;
    }

    preload () {
        var preloadHalfWidth = this.game.cache.getImage('preloaderBar').width / 2;

        this.preloadBar = this.add.sprite(this.world.centerX - preloadHalfWidth, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.bitmapFont('myfont', require('../assets/font/font.png'), require('../assets/font/font.fnt'));

        this.load.image('name', require('../assets/images/name.png'));
        this.load.image('instructions', require('../assets/images/instructions.png'));
        this.load.image('logo', require('../assets/images/divan_logo2.png'));
        this.load.spritesheet('playbtn', require('../assets/images/playbtn2.png'), 70, 23);
        this.load.spritesheet('howtobtn', require('../assets/images/howtobtn2.png'), 404, 51);

        this.load.image('boy0', require('../assets/images/happyboy_0.png'));
        this.load.image('evil0', require('../assets/images/happyevil_0.png'));

        this.load.image('oneBoyGood', require('../assets/images/oneBoyGood.png'));
        this.load.image('oneBoyBad', require('../assets/images/oneBoyBad.png'));
        this.load.image('twoBoysFirstGood', require('../assets/images/twoBoysFirstGood.png'));
        this.load.image('twoBoysFirstBad', require('../assets/images/twoBoysFirstBad.png'));

        this.load.image('crumpled', require('../assets/images/crumpled.jpg'));

        this.load.image('down_arrow', require('../assets/images/downarrow.png'));

        this.load.image('gift', require('../assets/images/gift.png'));
        this.load.image('sleigh_small', require('../assets/images/santa_sleigh_upd_small.png'));
        this.load.spritesheet('deer', require('../assets/images/deer.png'), 230, 131, 11);
        this.load.image('one_deer', require('../assets/images/one_deer.png'));
        this.load.image('bg', require('../assets/images/landscape.jpg'));
        this.load.image('bg_mainmenu', require('../assets/images/landscape_mainmenu.jpg'));

        this.load.image('houseBeigeWalls', require('../assets/images/houseBeigeWalls.png'));
        this.load.image('houseBeigeWallsSmall', require('../assets/images/houseBeigeWallsSmall.jpg'));
        this.load.image('houseBeigeChimney', require('../assets/images/houseBeigeChimney2.png'));
        this.load.image('houseDarkChimney', require('../assets/images/houseDarkChimney2.png'));
        this.load.image('houseDarkWalls', require('../assets/images/houseDarkWalls.png'));
        this.load.image('houseDarkWallsSmall', require('../assets/images/houseDarkWallsSmall.jpg'));
        this.load.image('roof', require('../assets/images/roof2.jpg'));
        this.load.image('windowCheckered', require('../assets/images/windowCheckered2.png'));

        this.load.spritesheet('babka', require('../assets/images/babka.png'), 86, 79, 6);
        this.load.spritesheet('boy', require('../assets/images/happyboy.png'), 86, 79, 6);
        this.load.spritesheet('evil', require('../assets/images/happyevil.png'), 86, 79, 6);

        this.load.spritesheet('burst', require('../assets/images/burst4.png'), 160, 160, 5);

        this.load.spritesheet('sleigh', require('../assets/images/santa_sleigh_simpl.png'), 185, 216, 11);
    // this.load.spritesheet('santa_sleigh_drop2', require('../assets/images/santa_sleigh_drop2.png'), 363, 397, 4);
    }

    create () {
        this.state.start('MainMenu');
    // this.state.start('GameOver');
    }
}
