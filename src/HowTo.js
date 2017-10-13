Game.Howto = function(game) {
};

Game.Howto.prototype = {
    create: function(game) {
        this.add.sprite(0, 0, 'menubg');
        this.instructions = this.add.sprite(50, 50, 'instructions');
        this.instructions.scale.setTo(0.7, 0.7);

        this.lights = this.add.sprite(40, 100, 'lights');
        this.lights.scale.setTo(0.4, 0.4);
        this.lightsBt = this.add.sprite(40, 400, 'lights_bottom');
        this.lightsBt.scale.setTo(0.4, 0.4);
        this.lightsL = this.add.sprite(30, 120, 'lights_left');
        this.lightsL.scale.setTo(0.2, 0.2);
        this.lightsR = this.add.sprite(320, 120, 'lights_right');
        this.lightsR.scale.setTo(0.2, 0.2);

        this.createButton(game, 'playbtn', 220, 385, 70, 23, function() {
            this.state.start('Level1');
        });

        var txt = "Dear Santa,\nbecause of financial constraints, \nthe number of gifts is limited, so\nthrow them wisely. Only good\nkids deserve them. If a bad kid\nreceives a present intended for\nother boy he will never give it \naway.Use        to drop gifts.";
        this.text = this.add.text(80, 150, txt, {
            font: '16px Tahoma',
            fill: '#000',
            align: 'left'
        });
        this.text.lineSpacing = 1.5;

        this.downArrow = this.add.sprite(145, 350, 'down_arrow');
        this.downArrow.scale.setTo(0.3, 0.3);
    },
    //код дублируется
    createButton: function(game, spriteName, x, y, w, h, callback) {
        var button = game.add.button(x, y, spriteName, callback, this, 0, 1, 2);

        button.anchor.setTo(0, 0);
        button.width = w;
        button.height = h;
    }
}