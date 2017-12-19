Game.GameOver = function(game) {
};

Game.GameOver.prototype = {
    create: function(game) {
        var gameOverBg,
            labelHeader,
            bgHeight = this.game.cache.getImage('bg_mainmenu').height*0.5;

        labelHeader = game.add.bitmapText(0, 130, 'myfont', 'GAME OVER', 64);
        labelHeader.update();
        labelHeader.updateText();
        labelHeader.x = gameWidth/2 - labelHeader.width/2;

        gameOverBg = this.add.sprite(0, gameHeight - bgHeight, 'bg_mainmenu');
        gameOverBg.scale.setTo(0.5, 0.5);
    },
    update: function(game) {

    }
}