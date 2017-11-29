Game.Preloader = function(game) {
    this.preloadBar = null;
    this.dpr = 3;
    //this.dpr = window.devicePixelRatio;
    this.frameDims = {
        "deer": {
            1: {
                "width": 138,
                "height": 78
            },
            2: {
                "width": 230,
                "height": 131
            },
            3: {
                "width": 230,
                "height": 131
            }
        },
        "babka": {
            1: {
                "width": 51,
                "height": 47
            },
            2: {
                "width": 86,
                "height": 79
            },
            3: {
                "width": 86,
                "height": 79
            }
        },
        "boy": {
            1: {
                "width": 51,
                "height": 47
            },
            2: {
                "width": 86,
                "height": 79
            },
            3: {
                "width": 86,
                "height": 79
            }
        },
        "evil": {
            1: {
                "width": 51,
                "height": 47
            },
            2: {
                "width": 86,
                "height": 79
            },
            3: {
                "width": 86,
                "height": 79
            }
        }
    };
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

        this.load.image('gift', 'assets/images/gift.png');

        this.load.image('sleigh', this.filePath('assets/images/santa_sleigh', 'png'));
        this.load.spritesheet('deer', this.filePath('assets/images/deer', 'png'), this.frameWidth('deer'), this.frameHeight('deer'), 11);
        this.load.image('bg', 'assets/images/landscape.jpg');

        this.load.image('houseBeigeWalls', 'assets/images/houseBeigeWalls.png');
        this.load.image('houseBeigeWallsSmall', 'assets/images/houseBeigeWallsSmall.jpg');
        this.load.image('houseBeigeChimney', 'assets/images/houseBeigeChimney2.png');
        this.load.image('houseDarkChimney', 'assets/images/houseDarkChimney2.png');
        this.load.image('houseDarkWalls', 'assets/images/houseDarkWalls.png');
        this.load.image('houseDarkWallsSmall', 'assets/images/houseDarkWallsSmall.jpg');
        this.load.image('roof', 'assets/images/roof2.jpg');
        this.load.image('windowCheckered', 'assets/images/windowCheckered2.png');

        this.load.spritesheet('babka', this.filePath('assets/images/babka', 'png'), this.frameWidth('babka'), this.frameHeight('babka'), 6);
        this.load.spritesheet('boy', this.filePath('assets/images/happyboy', 'png'), this.frameWidth('boy'), this.frameHeight('boy'), 6);
        this.load.spritesheet('evil', this.filePath('assets/images/happyevil', 'png'), this.frameWidth('evil'), this.frameHeight('evil'), 6);
    },
    create: function() {
        this.state.start('MainMenu');
    },
    filePath: function(pathMain, ext) {
        var version = 3, dpr = this.dpr;
        // if (dpr >= 2 && dpr < 3) {
        //     version = 2;
        // } else if (dpr >= 3) {
        //     version = 3;
        // }
        return pathMain + '_dpr' + version + '.' + ext;
    },
    frameWidth: function(name) {
        return this.frameDims[name][this.dpr].width;
    },
    frameHeight: function(name) {
        return this.frameDims[name][this.dpr].height;
    },
}