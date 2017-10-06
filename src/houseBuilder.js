function HouseBuilder(game) {
    this.game = game;
    this.houses = [];
    this.game.onCollideSignal = new Phaser.Signal();
}

HouseBuilder.prototype.checkCollision = function(gifts) {
    for (var i = 0; i < this.houses.length; i++) {
        this.game.physics.arcade.overlap(gifts, this.houses[i], this.onCollide, null, this);
    }
}

HouseBuilder.prototype.onCollide = function(gift, housePart) {
    var hitPart = this.isChimneyHit(housePart) ? "chimney" : "roof";
    this.game.onCollideSignal.dispatch({
        hitPart: hitPart,
        houseType: housePart.houseType,
        houseNum: housePart.houseNum
    });

    gift.kill();
}

HouseBuilder.prototype.isChimneyHit = function(housePart) {
    return housePart.key.indexOf('chimney') != -1;
}

HouseBuilder.prototype.isRoofHit = function(housePart) {
    return housePart.key.indexOf('roof') != -1;
}

HouseBuilder.prototype.getMaxPosX = function() {
    if (this.houses.length > 0) {
        return this.houses[this.houses.length - 1].x;
    } else {
        return -1;
    }
}

HouseBuilder.prototype.addHouse = function(x, y) {
    var num = this.game.rnd.integerInRange(0, 3),
        houseNum = this.houses.length;

    if (num == 0) {
        house = this.getTwoBoysFirstBad(x, y, houseNum);
    } else if (num == 1) {
        house = this.getTwoBoysFirstGood(x, y, houseNum);
    } else if (num == 2) {
        house = this.getOneBoyGood(x, y, houseNum);
    } else {
        house = this.getOneBoyBad(x, y, houseNum);
    }

    this.houses.push(house);
}

HouseBuilder.prototype.goodbye = function(sprite) {
    //почему-то когда x=0 у домика то показывает что у спрайта -70
    if (sprite.key.indexOf("Right") != -1 && sprite.position.x < -420) {
        sprite.parent.removeAll(true);
    }
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, houseNum) {
    var house = this.game.add.group();

    this._addHousePart("houseDarkBottomLeft", house, x, y, 0, houseNum);
    this._addHousePart("houseDarkBottomMid", house, x + 70, y, 0, houseNum);
    this._addHousePart("houseDarkBottomRight", house, x + 140, y, 0, houseNum);
    this._addHousePart("houseDarkMidLeft", house, x, y - 70, 0, houseNum);
    this._addHousePart("houseDark", house, x + 70, y - 70, 0, houseNum);
    this._addHousePart("houseDarkMidRight", house, x + 140, y - 70, 0, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 40, 0, houseNum);
    this._addHousePart("doorTop", house, x + 110, y - 70, 0, houseNum);
    this._addHousePart("doorKnobAlt", house, x + 110, y, 0, houseNum);

    this._addHousePart("houseDarkMidLeft", house, x, y - 140, 0, houseNum);
    this._addHousePart("houseDark", house, x + 70, y - 140, 0, houseNum);
    this._addHousePart("houseDarkMidRight", house, x + 140, y - 140, 0, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 130, 0, houseNum);
    this._addHousePart("windowCheckered", house, x + 110, y - 130, 0, houseNum);

    this._addHousePart("roofRedRight", house, x - 70, y - 210, 0, houseNum);
    this._addHousePart("roofRedTopMid", house, x, y - 210, 0, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 70, y - 210, 0, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 140, y - 210, 0, houseNum);
    this._addHousePart("roofRedTopLeft", house, x + 210, y - 210, 0, houseNum);

    this._addHousePart("chimneyThin", house, x + 120, y - 280, 0, houseNum);

    return house;
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, houseNum) {
    var house = this.game.add.group();

    this._addHousePart("houseBeigeBottomLeft", house, x, y, 1, houseNum);
    this._addHousePart("houseBeigeBottomMid", house, x + 70, y, 1, houseNum);
    this._addHousePart("houseBeigeBottomRight", house, x + 140, y, 1, houseNum);
    this._addHousePart("houseBeigeMidLeft", house, x, y - 70, 1, houseNum);
    this._addHousePart("houseBeige", house, x + 70, y - 70, 1, houseNum);
    this._addHousePart("houseBeigeMidRight", house, x + 140, y - 70, 1, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 40, 1, houseNum);
    this._addHousePart("doorTop", house, x + 110, y - 70, 1, houseNum);
    this._addHousePart("doorKnobAlt", house, x + 110, y, 1, houseNum);

    this._addHousePart("houseBeigeMidLeft", house, x, y - 140, 1, houseNum);
    this._addHousePart("houseBeige", house, x + 70, y - 140, 1, houseNum);
    this._addHousePart("houseBeigeMidRight", house, x + 140, y - 140, 1, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 130, 1, houseNum);
    this._addHousePart("windowCheckered", house, x + 110, y - 130, 1, houseNum);

    this._addHousePart("roofRedRight", house, x - 70, y - 210, 1, houseNum);
    this._addHousePart("roofRedTopMid", house, x, y - 210, 1, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 70, y - 210, 1, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 140, y - 210, 1, houseNum);
    this._addHousePart("roofRedTopLeft", house, x + 210, y - 210, 1, houseNum);

    this._addHousePart("chimneyLow", house, x + 120, y - 280, 1, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, houseNum) {
    var house = this.game.add.group();

    this._addHousePart("houseBeigeBottomLeft", house, x, y, 2, houseNum);
    this._addHousePart("houseBeigeBottomMid", house, x + 70, y, 2, houseNum);
    this._addHousePart("houseBeigeBottomRight", house, x + 140, y, 2, houseNum);
    this._addHousePart("houseBeigeMidLeft", house, x, y - 70, 2, houseNum);
    this._addHousePart("houseBeige", house, x + 70, y - 70, 2, houseNum);
    this._addHousePart("houseBeigeMidRight", house, x + 140, y - 70, 2, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 40, 2, houseNum);
    this._addHousePart("doorTop", house, x + 110, y - 70, 2, houseNum);
    this._addHousePart("doorKnobAlt", house, x + 110, y, 2, houseNum);

    this._addHousePart("roofRedRight", house, x - 70, y - 140, 2, houseNum);
    this._addHousePart("roofRedTopMid", house, x, y - 140, 2, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 70, y - 140, 2, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 140, y - 140, 2, houseNum);
    this._addHousePart("roofRedTopLeft", house, x + 210, y - 140, 2, houseNum);
    this._addHousePart("chimneyLow", house, x + 120, y - 210, 2, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, houseNum) {
    var house = this.game.add.group();

    this._addHousePart("houseDarkBottomLeft", house, x, y, 3, houseNum);
    this._addHousePart("houseDarkBottomMid", house, x + 70, y, 3, houseNum);
    this._addHousePart("houseDarkBottomRight", house, x + 140, y, 3, houseNum);
    this._addHousePart("houseDarkMidLeft", house, x, y - 70, 3, houseNum);
    this._addHousePart("houseDark", house, x + 70, y - 70, 3, houseNum);
    this._addHousePart("houseDarkMidRight", house, x + 140, y - 70, 3, houseNum);

    this._addHousePart("windowCheckered", house, x + 25, y - 40, 3, houseNum);
    this._addHousePart("doorTop", house, x + 110, y - 70, 3, houseNum);
    this._addHousePart("doorKnobAlt", house, x + 110, y, 3, houseNum);

    this._addHousePart("roofRedRight", house, x - 70, y - 140, 3, houseNum);
    this._addHousePart("roofRedTopMid", house, x, y - 140, 3, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 70, y - 140, 3, houseNum);
    this._addHousePart("roofRedTopMid", house, x + 140, y - 140, 3, houseNum);
    this._addHousePart("roofRedTopLeft", house, x + 210, y - 140, 3, houseNum);
    this._addHousePart("chimneyThin", house, x + 120, y - 210, 3, houseNum);

    return house;
}

/*HouseBuilder.prototype.afterHit = function(housePart, result, index) {
    //housePart это чтобы потом показать анимацию пробитой крыши
    var name = result.name, floor = result.floor,
        sprite, sprites;

    if (name == "evil") {
        sprites = this.evils;
    } else if (name == "boy") {
        sprites = this.boys;
    } else if (name == "babka") {
        sprites = this.babkas;
    }

    if (typeof(floor) != 'undefined') {
        sprite = sprites.children.filter(function(s){
            return s.index == index && s.floor == floor;
        })[0];
    } else {
        sprite = sprites.children.filter(function(s){
            return s.index == index;
        })[0];
    }

    this._showWindowAnim(sprite);
}

HouseBuilder.prototype._showWindowAnim = function(sprite) {
    sprite.visible = true;
    sprite.loop = false;
    sprite.play();
}*/

HouseBuilder.prototype._addHousePart = function(name, house, x, y, houseType, houseNum) {
    var sprite = this.game.add.sprite(x, y, name);
    house.add(sprite);
    this.game.physics.arcade.enable(sprite);
    sprite.body.velocity.x = -200;
    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(this.goodbye, this);
    sprite.houseType = houseType;
    sprite.houseNum = houseNum;
}

/*HouseBuilder.prototype._createBabkaAnim = function(window) {
    var babkaFrames = [
        "window.png",
        "window.png",
        "babka_frame_00.gif",
        "babka_frame_01.gif",
        "babka_frame_02.gif",
        "babka_frame_03.gif",
        "babka_frame_04.gif",
        "babka_frame_05.gif",
        "babka_frame_06.gif",
        "babka_frame_07.gif",
        "babka_frame_08.gif",
        "babka_frame_09.gif",
        "window.png"
    ];
    var babka = g.sprite(babkaFrames);

    babka.x = window.x;
    babka.y = window.y;
    babka.loop = false;
    babka.index = window.index;
    babka.visible = false;
    this.babkas.addChild(babka);
}

HouseBuilder.prototype._createHappyBoyAnim = function(window, floor) {
    var boyFrames = [
        "window.png",
        "window.png",
        "happyboy_frame_00.gif",
        "happyboy_frame_01.gif",
        "happyboy_frame_02.gif",
        "happyboy_frame_03.gif",
        "happyboy_frame_04.gif",
        "happyboy_frame_05.gif",
        "happyboy_frame_06.gif",
        "happyboy_frame_07.gif",
        "happyboy_frame_08.gif",
        "happyboy_frame_09.gif",
        "happyboy_frame_10.gif",
        "happyboy_frame_11.gif",
        "happyboy_frame_12.gif",
        "happyboy_frame_13.gif",
        "happyboy_frame_14.gif",
        "happyboy_frame_15.gif",
        "happyboy_frame_16.gif",
        "happyboy_frame_17.gif",
        "happyboy_frame_18.gif",
        "happyboy_frame_19.gif",
        "window.png"
    ];
    var boy = g.sprite(boyFrames);

    boy.x = window.x;
    boy.y = window.y;
    boy.loop = false;
    boy.index = window.index;
    boy.visible = false;
    boy.floor = floor;
    this.boys.addChild(boy);
}

HouseBuilder.prototype._createHappyEvilAnim = function(window, floor) {
    var evilFrames = [
        "window.png",
        "window.png",
        "happyevil_frame_00.gif",
        "happyevil_frame_01.gif",
        "happyevil_frame_02.gif",
        "happyevil_frame_03.gif",
        "happyevil_frame_04.gif",
        "happyevil_frame_05.gif",
        "happyevil_frame_06.gif",
        "happyevil_frame_07.gif",
        "happyevil_frame_08.gif",
        "happyevil_frame_09.gif",
        "happyevil_frame_10.gif",
        "happyevil_frame_11.gif",
        "happyevil_frame_12.gif",
        "happyevil_frame_13.gif",
        "happyevil_frame_14.gif",
        "happyevil_frame_15.gif",
        "happyevil_frame_16.gif",
        "happyevil_frame_17.gif",
        "happyevil_frame_18.gif",
        "happyevil_frame_19.gif",
        "happyevil_frame_20.gif",
        "happyevil_frame_21.gif",
        "happyevil_frame_22.gif",
        "happyevil_frame_23.gif",
        "happyevil_frame_24.gif",
        "happyevil_frame_25.gif",
        "happyevil_frame_26.gif",
        "happyevil_frame_27.gif",
        "window.png"
    ];
    var evil = g.sprite(evilFrames);

    evil.x = window.x;
    evil.y = window.y;
    evil.loop = false;
    evil.index = window.index;
    evil.visible = false;
    evil.floor = floor;
    this.evils.addChild(evil);
}*/