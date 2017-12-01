Game.MainMenu = function(game) {
};

Game.MainMenu.prototype = {
    create: function(game) {
        var bgCroppedHeight = this.game.cache.getImage('bg_cropped').height*0.5;
        this.mainMenubg = this.add.sprite(0, gameHeight - bgCroppedHeight, 'bg_cropped');
        this.mainMenubg.scale.setTo(0.5, 0.5);

        var nameHalfWidth = this.game.cache.getImage('name').width*0.7/2;
        this.name = this.add.sprite(gameWidth/2 - nameHalfWidth, 130, 'name');
        this.name.scale.setTo(0.7, 0.7);

        var sleighHalfWidth = this.game.cache.getImage('sleigh').width*0.4/2;
        var deerHalfWidth = this.game.cache.getImage('one_deer').width*0.4/2;
        this.sleigh = this.add.sprite(gameWidth/2 - sleighHalfWidth - deerHalfWidth, 68, 'sleigh');
        this.sleigh.scale.setTo(0.4, 0.4);
        this.deer = this.add.sprite(gameWidth/2 - deerHalfWidth + 10, 68 + 11, 'one_deer');
        this.deer.scale.setTo(0.4, 0.4);

        var mainBtns = this.game.add.group();
        var mainBtnsVertPad = 45;
        var playbtnHeight = this.game.cache.getImage('playbtn').height;

        //группа кнопок будет ширины самой длинной кнопки
        var playbtnHalfWidth = this.game.cache.getImage('playbtn').width/2;
        var howtobtnHalfWidth = this.game.cache.getImage('howtobtn').width*0.5/2;

        var playbtn = this.game.make.button(howtobtnHalfWidth - playbtnHalfWidth, 0, 'playbtn', function(){
            this.state.start('Level1');
        }, this, 2, 1, 0);
        mainBtns.add(playbtn);
        var howtobtn = this.game.make.button(0, mainBtnsVertPad, 'howtobtn', function(){
            this.state.start('Howto');
        }, this, 2, 1, 0);
        howtobtn.scale.setTo(0.5, 0.5);
        mainBtns.add(howtobtn);

        mainBtns.centerX = this.world.centerX;
        mainBtns.centerY = this.world.centerY + 30;

        var logoWidth = this.game.cache.getImage('logo').width*0.5;
        var logoHeight = this.game.cache.getImage('logo').height*0.5;
        var logoPaddingRight = gameWidth*0.025;
        this.logo = this.add.sprite(logoPaddingRight, gameHeight - logoHeight - logoPaddingRight, 'logo');
        this.logo.scale.setTo(0.5, 0.5);
    },
    update: function(game) {

    },
    createButton: function(game, spriteName, x, y, w, h, callback) {
        var button = game.add.button(x, y, spriteName, callback, this, 0, 1, 2);

        button.anchor.setTo(0, 0);
        button.width = w;
        button.height = h;
    }
}