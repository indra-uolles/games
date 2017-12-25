import {gameWidth, gameHeight} from './consts';

export default class MainMenu {
    create() {
        var mainMenubg, name, sleigh, deer, mainBtns, playbtn, howtobtn, logo,
            mainBtnsVertPad = 45,
            logoPaddingRight = gameWidth*0.025,
            bgHeight = this.game.cache.getImage('bg_mainmenu').height*0.5,
            nameHalfWidth = this.game.cache.getImage('name').width*0.7/2,
            sleighHalfWidth = this.game.cache.getImage('sleigh_small').width*0.5/2,
            deerHalfWidth = this.game.cache.getImage('one_deer').width*0.4/2,
            playbtnHalfWidth = this.game.cache.getImage('playbtn').width/2,
            howtobtnHalfWidth = this.game.cache.getImage('howtobtn').width*0.5/2,
            // logoWidth = this.game.cache.getImage('logo').width*0.5,
            logoHeight = this.game.cache.getImage('logo').height*0.5;

        mainMenubg = this.add.sprite(0, gameHeight - bgHeight, 'bg_mainmenu');
        mainMenubg.scale.setTo(0.5, 0.5);

        name = this.add.sprite(gameWidth/2 - nameHalfWidth, 130, 'name');
        name.scale.setTo(0.7, 0.7);

        sleigh = this.add.sprite(gameWidth/2 - sleighHalfWidth - deerHalfWidth, 40, 'sleigh_small');
        sleigh.scale.setTo(0.5, 0.5);
        deer = this.add.sprite(gameWidth/2 - deerHalfWidth + 27, 70, 'one_deer');
        deer.scale.setTo(0.45, 0.45);

        mainBtns = this.game.add.group();
        playbtn = this.game.make.button(howtobtnHalfWidth - playbtnHalfWidth, 0, 'playbtn', function () {
            this.state.start('Level1');
        }, this, 2, 1, 0);
        mainBtns.add(playbtn);
        howtobtn = this.game.make.button(0, mainBtnsVertPad, 'howtobtn', function () {
            this.state.start('Howto');
        }, this, 2, 1, 0);
        howtobtn.scale.setTo(0.5, 0.5);
        mainBtns.add(howtobtn);

        mainBtns.centerX = this.world.centerX;
        mainBtns.centerY = this.world.centerY + 30;

        logo = this.add.sprite(logoPaddingRight, gameHeight - logoHeight - logoPaddingRight, 'logo');
        logo.scale.setTo(0.5, 0.5);
    }

    createButton(game, spriteName, x, y, w, h, callback) {
        var button = game.add.button(x, y, spriteName, callback, this, 0, 1, 2);

        button.anchor.setTo(0, 0);
        button.width = w;
        button.height = h;
    }
}
