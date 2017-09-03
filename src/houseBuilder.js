function HouseBuilder(g, babkaFrames) {
    this.g = g;
    this.chimneys = g.group();
    this.houses = g.group();
    this.windows = g.group();
    this.roofs = g.group();
    this.babkas = g.group();
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
        var babkaFrames = [
          "frame_00.gif",
          "frame_01.gif",
          "frame_02.gif",
          "frame_03.gif",
          "frame_04.gif",
          "frame_05.gif",
          "frame_06.gif",
          "frame_07.gif",
          "frame_08.gif",
          "frame_09.gif"
        ];

        var babka = g.sprite(babkaFrames);
        babka.x = houseSprite.x;
        babka.y = houseSprite.y;
        babka.loop = false;
        babka.index = houseSprite.index;
        babka.visible = false;
        this.babkas.addChild(babka);

    } else if (name.indexOf("roof") != -1) {
        houseSprite.hit = false;
        this.roofs.addChild(houseSprite);
    } else {
        this.houses.addChild(houseSprite);
    }
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, i) {
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