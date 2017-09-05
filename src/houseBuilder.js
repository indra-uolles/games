function HouseBuilder(g, babkaFrames) {
    this.g = g;
    this.chimneys = g.group();
    this.houses = g.group();
    this.windows = g.group();
    this.roofs = g.group();
    this.babkas = g.group();
    this.boys = g.group();
    this.evils = g.group();
    this.scoring = {};
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, i) {
    this._createScoring(i, 1);

    this._addHousePart("houseDarkBottomLeft.png", x, y, i);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y, i);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y, i);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70, i);
    this._addHousePart("houseDark.png", x + 70, y - 70, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("houseDarkMidLeft.png", x, y - 140, i);
    this._addHousePart("houseDark.png", x + 70, y - 140, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 140, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 130, i);
    this._addHousePart("windowCheckered.png", x + 110, y - 130, i);

    this._addHousePart("roofRedRight.png", x - 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210, i);

    this._addHousePart("chimneyThin.png", x + 120, y - 280, i);
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, i) {
    this._createScoring(i, 2);

    this._addHousePart("houseBeigeBottomLeft.png", x, y, i);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y, i);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y, i);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70, i);
    this._addHousePart("houseBeige.png", x + 70, y - 70, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("houseBeigeMidLeft.png", x, y - 140, i);
    this._addHousePart("houseBeige.png", x + 70, y - 140, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 140, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 130, i);
    this._addHousePart("windowCheckered.png", x + 110, y - 130, i);

    this._addHousePart("roofRedRight.png", x - 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210, i);

    this._addHousePart("chimneyLow.png", x + 120, y - 280, i);
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, i) {
    this._createScoring(i, 3);

    this._addHousePart("houseBeigeBottomLeft.png", x, y, i);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y, i);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y, i);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70, i);
    this._addHousePart("houseBeige.png", x + 70, y - 70, i);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
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
    this._createScoring(i, 4);

    this._addHousePart("houseDarkBottomLeft.png", x, y, i);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y, i);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y, i);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70, i);
    this._addHousePart("houseDark.png", x + 70, y - 70, i);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70, i);

    this._addHousePart("windowCheckered.png", x + 25, y - 40, i);
    this._addHousePart("doorTop.png", x + 110, y - 70, i);
    this._addHousePart("doorKnobAlt.png", x + 110, y, i);

    this._addHousePart("roofRedRight.png", x - 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 140, i);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 140, i);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 140, i);

    this._addHousePart("chimneyThin.png", x + 120, y - 210, i);
}

HouseBuilder.prototype.openWindow = function(window) {
    var x = window.x, y = window.y, index = window.index;
    var houseSprite = this.g.sprite("window.png");

    houseSprite.x = x;
    houseSprite.y = y;
    houseSprite.index = index;

    this.windows.removeChild(window);
    this.windows.addChild(houseSprite);
}

HouseBuilder.prototype.breakWindow = function(window) {
    this.windows.removeChild(window);
}

HouseBuilder.prototype.showBabka = function(babka) {
    babka.visible = true;
    babka.loop = false;
    babka.play();
}

HouseBuilder.prototype.showBoy = function(boy) {
    boy.visible = true;
    boy.loop = false;
    boy.play();
}

HouseBuilder.prototype.showEvil = function(evil) {
    evil.visible = true;
    evil.loop = false;
    evil.play();
}

HouseBuilder.prototype.afterHit = function(housePart, index) {
    var _this = this;
    if (housePart == "roof") {
        //показываем бабок как раньше
        var babkas = this.babkas.children.filter(function(babka){return babka.index == index });

        babkas.forEach(function(babka) {
            _this.showBabka(babka);
        });
    } else if (housePart == "chimney") {
        var type = this._getHouseType(index);

        if (type == 1 || type == 2) {
            var boys = this.boys.children.filter(function(boy){return boy.index == index });

            boys.forEach(function(boy) {
                _this.showBoy(boy);
            });
        } else if (type == 3) {
             var boy =  this.boys.children.some(function(boy){return boy.index == index });
             this.showBoy(boy);
        } else if (type == 4) {
             var evil =  this.evils.children.filter(function(evil){return evil.index == index })[0];
             this.showEvil(evil);
        }
    }
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
        this._createBabkaAnim(houseSprite);
        this._createHappyBoyAnim(houseSprite);
        this._createHappyEvilAnim(houseSprite);

    } else if (name.indexOf("roof") != -1) {
        houseSprite.hit = false;
        this.roofs.addChild(houseSprite);

    } else {
        this.houses.addChild(houseSprite);
    }
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

HouseBuilder.prototype._createHappyBoyAnim = function(window) {
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
    this.boys.addChild(boy);
}

HouseBuilder.prototype._createHappyEvilAnim = function(window) {
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
    this.evils.addChild(evil);
}

HouseBuilder.prototype._createScoring = function(i, type) {
    this.scoring[i] = {
        type: type,
        roofHits: 0,
        chimneyHits: 0
    };
};

//HouseBuilder.prototype._getRoofHitsWindow = function(index) {
    // var roofHits = this._getRoofHits(index);
    // var type = this._getHouseType(index);


    // if (type == 1) {
    //     if (roofHits == 0) {

    //     } else if (roofHits == 1) {

    //     //уже разбивать нечего
    //     } else {

    //     }
    // } else if (type == 2) {

    // //one window
    // } else {
    //     return 0;
    // }
//}

HouseBuilder.prototype._getHouseType = function(index) {
    return this.scoring[index].type;
}

HouseBuilder.prototype._getRoofHits = function(index) {
    return this.scoring[index].roofHits;
}

HouseBuilder.prototype._getChimneyHits = function(index) {
    return this.scoring[index].chimneyHits;
}