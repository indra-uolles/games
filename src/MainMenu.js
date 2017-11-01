Game.MainMenu = function(game) {
};

Game.MainMenu.prototype = {
    create: function(game) {
        this.add.sprite(0, 0, 'menubg');
        this.name = this.add.sprite(50, 130, 'name');
        this.name.scale.setTo(0.7, 0.7);

        this.sleigh = this.add.sprite(150, 78, 'sleigh');
        this.sleigh.scale.setTo(0.6, 0.6);

        this.sign = this.add.sprite(140, 200, 'sign');
        this.sign.scale.setTo(0.7, 0.7);
        this.createButton(game, 'playbtn', 170, 325, 70, 23, function() {
            this.state.start('Level1');
        });
        this.createButton(game, 'howtobtn', 160, 260, 105, 25, function() {
            this.state.start('Howto');
        });
        this.createButton(game, 'sharebtn', 155, 370, 98, 25, function() {
            console.log('share');
        });

        // game.add.text(220, 430, 'created by', {
        //     font: '20px Tahoma',
        //     fill: '#000',
        //     align: 'center'
        // });
        this.logo = this.add.sprite(300, 400, 'logo');
        this.logo.scale.setTo(0.3, 0.3);
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