function HouseBuilder(g, babkaFrames) {
    this.g = g;
    this.chimneys = g.group();
    this.houses = g.group();
    this.windows = g.group();
    this.roofs = g.group();
    this.babkas = g.group();
    this.boys = g.group();
    this.evils = g.group();
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, i) {
    var houseSprite;

    this._addHousePart("houseDarkBottomLeft.png", x, y, i);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y, i);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y, i);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70, i);
    this._addHousePart("houseDark.png", x + 70, y - 70, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70, i);

    houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    houseSprite.floor = 1;
    this._createHappyBoyAnim(houseSprite, 1);
    this._createHappyEvilAnim(houseSprite, 1);

    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("houseDarkMidLeft.png", x, y - 140, i);
    this._addHousePart("houseDark.png", x + 70, y - 140, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 140, i);

    houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 130, i);
    houseSprite.floor = 2;
    this._createHappyBoyAnim(houseSprite, 2);
    this._createHappyEvilAnim(houseSprite, 2);

    houseSprite = this._addHousePart("windowCheckered.png", x + 110, y - 130, i);
    this._createBabkaAnim(houseSprite);

    this._addHousePart("roofRedRight.png", x - 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210, i);

    this._addHousePart("chimneyThin.png", x + 120, y - 280, i);
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, i) {
    var houseSprite;

    this._addHousePart("houseBeigeBottomLeft.png", x, y, i);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y, i);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y, i);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70, i);
    this._addHousePart("houseBeige.png", x + 70, y - 70, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70, i);

    houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    houseSprite.floor = 1;
    this._createHappyBoyAnim(houseSprite, 1);
    this._createHappyEvilAnim(houseSprite, 1);

    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("houseBeigeMidLeft.png", x, y - 140, i);
    this._addHousePart("houseBeige.png", x + 70, y - 140, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 140, i);

    houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 130, i);
    houseSprite.floor = 2;
    this._createHappyBoyAnim(houseSprite, 2);
    this._createHappyEvilAnim(houseSprite, 2);

    houseSprite = this._addHousePart("windowCheckered.png", x + 110, y - 130, i);
    this._createBabkaAnim(houseSprite);

    this._addHousePart("roofRedRight.png", x - 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210, i);

    this._addHousePart("chimneyLow.png", x + 120, y - 280, i);
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, i) {
    this._addHousePart("houseBeigeBottomLeft.png", x, y, i);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y, i);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y, i);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70, i);
    this._addHousePart("houseBeige.png", x + 70, y - 70, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70, i);

    var houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    this._createHappyBoyAnim(houseSprite);
    this._createHappyEvilAnim(houseSprite);
    this._createBabkaAnim(houseSprite);

    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("roofRedRight.png", x - 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 140, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 140, i);

    this._addHousePart("chimneyLow.png", x + 120, y - 210, i);
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, i) {
    this._addHousePart("houseDarkBottomLeft.png", x, y, i);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y, i);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y, i);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70, i);
    this._addHousePart("houseDark.png", x + 70, y - 70, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70, i);

    var houseSprite = this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    this._createHappyBoyAnim(houseSprite);
    this._createHappyEvilAnim(houseSprite);
    this._createBabkaAnim(houseSprite);

    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("roofRedRight.png", x - 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 140, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 140, i);

    this._addHousePart("chimneyThin.png", x + 120, y - 210, i);
}

HouseBuilder.prototype.afterHit = function(housePart, result, index) {
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
}

HouseBuilder.prototype._addHousePart = function(name, x, y, i) {
    var houseSprite = this.g.sprite(name);

    houseSprite.x = x;
    houseSprite.y = y;

    if (name.indexOf("chimney") != - 1 || name.indexOf("window") != -1 || name.indexOf("roof") != -1) {
        houseSprite.index = i;
    }

    if (name.indexOf("chimney") != - 1) {
        houseSprite.hit = false;
        this.chimneys.addChild(houseSprite);

    } else if (name.indexOf("window") != -1) {
        this.windows.addChild(houseSprite);

    } else if (name.indexOf("roof") != -1) {
        houseSprite.hit = false;
        this.roofs.addChild(houseSprite);

    } else {
        this.houses.addChild(houseSprite);
    }

    return houseSprite;
}

HouseBuilder.prototype._createBabkaAnim = function(window) {
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
}