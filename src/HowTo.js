Game.Howto = function(game) {
};

Game.Howto.prototype = {
    create: function(game) {
        var instructions, txt, text, downArrow, boy, evil,
            oneBoyGood, oneBoyBad, twoBoysFirstGood, twoBoysFirstBad;

        game.add.tileSprite(0, 0, this.game.width, this.game.height, 'crumpled');

        var labelInstr = this.add.bitmapText(0, 50, 'myfont', 'INSTRUCTIONS', 64);
        labelInstr.update();
        labelInstr.updateText();
        labelInstr.x = gameWidth/2 - labelInstr.width/2;

        txt = "Dear Santa,\nbecause of financial constraints, \nthe number of gifts is limited, so\nthrow them wisely. Only good\nkids deserve them. This is a\ngood boy:";
        text = this.add.text(80, 150, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        boy = this.add.sprite(150, 280, 'boy0');
        boy.scale.setTo(0.6, 0.6);

        txt = "This is a bad boy:";
        text = this.add.text(80, 340, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        evil = this.add.sprite(200, 340, 'evil0');
        evil.scale.setTo(0.6, 0.6);

        txt = "Note that there are 4 types of houses, having\ndifferent roomers:";
        text = this.add.text(310, 150, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        oneBoyGood = this.add.sprite(310, 200, 'oneBoyGood');
        oneBoyGood.scale.setTo(0.6, 0.6);

        oneBoyBad = this.add.sprite(480, 200, 'oneBoyBad');
        oneBoyBad.scale.setTo(0.6, 0.6);

        twoBoysFirstGood = this.add.sprite(310, 300, 'twoBoysFirstGood');
        twoBoysFirstGood.scale.setTo(0.6, 0.6);

        twoBoysFirstBad = this.add.sprite(480, 300, 'twoBoysFirstBad');
        twoBoysFirstBad.scale.setTo(0.6, 0.6);

        txt = "If a bad kid receives a present\nintended for another boy,\nhe will never give it away.";
        text = this.add.text(80, 400, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        //downArrow = this.add.sprite(142, 280, 'down_arrow');
        //downArrow.scale.setTo(0.3, 0.3);

        txt = "Use spacebar to drop gifts.";
        text = this.add.text(310, 480, txt, {
            font: '16px Open Sans',
            fill: '#000',
            align: 'left'
        });
        text.lineSpacing = 1.5;

        this.createButton(game, 'playbtn', 530, 480, 70, 23, function() {
            this.state.start('Level1');
        });
    },
    //код дублируется
    createButton: function(game, spriteName, x, y, w, h, callback) {
        var button = game.add.button(x, y, spriteName, callback, this, 0, 1, 2);

        button.anchor.setTo(0, 0);
        button.width = w;
        button.height = h;
    }
}