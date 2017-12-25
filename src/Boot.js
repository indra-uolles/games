import Phaser from './Phaser';

const Boot = {
    init: function () {
        this.stage.disableVisibilityChange = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        // this.game.time.advancedTiming = true;
    },
    preload: function () {
        this.load.image('preloaderBar', require('../assets/images/loading.png'));
    },
    create: function () {
        this.state.start('Preloader');
    }
};

export default Boot;
