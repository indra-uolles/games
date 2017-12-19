var Game = {};

Game.Boot = function(game) {

};

Game.Boot.prototype = {
    init: function() {
        this.stage.disableVisibilityChange = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        //this.game.time.advancedTiming = true;
    },
    preload: function() {
        this.load.image('preloaderBar', 'assets/images/loading.png');
    },
    create: function() {
        this.state.start('Preloader');
    }
}