Game.Howto = function(game) {
};

Game.Howto.prototype = {
    create: function(game) {
        var instructions, txt, text, downArrow;

        game.add.tileSprite(0, 0, this.game.width, this.game.height, 'crumpled');

        instructions = this.add.sprite(50, 50, 'instructions');
        instructions.scale.setTo(0.7, 0.7);

        this.createButton(game, 'playbtn', 220, 385, 70, 23, function() {
            this.state.start('Level1');
        });

        txt = "Dear Santa,\nbecause of financial constraints, \nthe number of gifts is limited, so\nthrow them wisely. Only good\nkids deserve them. If a bad kid\nreceives a present intended for\nother boy he will never give it \naway.Use        to drop gifts.";
        text = this.add.text(80, 150, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        downArrow = this.add.sprite(145, 350, 'down_arrow');
        downArrow.scale.setTo(0.3, 0.3);
    },
    //код дублируется
    createButton: function(game, spriteName, x, y, w, h, callback) {
        var button = game.add.button(x, y, spriteName, callback, this, 0, 1, 2);

        button.anchor.setTo(0, 0);
        button.width = w;
        button.height = h;
    }
}