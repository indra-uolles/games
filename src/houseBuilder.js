function HouseBuilder(g) {
    this.g = g;
    this.chimneys = g.group();
    this.houses = g.group();
}

HouseBuilder.prototype._addHousePart = function(name, x, y) {
    var houseSprite = this.g.sprite(name);

    houseSprite.x = x;
    houseSprite.y = y;

    if (name == "chimneyLow.png" || name == "chimneyThin.png") {
        houseSprite.hit = false;
        this.chimneys.addChild(houseSprite);
    } else {
        this.houses.addChild(houseSprite);
    }
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y) {
    this._addHousePart("houseDarkBottomLeft.png", x, y);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70);
    this._addHousePart("houseDark.png", x + 70, y - 70);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70);

    this._addHousePart("windowCheckered.png", x + 25, y - 40);
    this._addHousePart("doorTop.png", x + 110, y - 70);
    this._addHousePart("doorKnobAlt.png", x + 110, y);

    this._addHousePart("houseDarkMidLeft.png", x, y - 140);
    this._addHousePart("houseDark.png", x + 70, y - 140);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 140);

    this._addHousePart("windowCheckered.png", x + 25, y - 130);
    this._addHousePart("windowCheckered.png", x + 110, y - 130);

    this._addHousePart("roofRedRight.png", x - 70, y - 210);
    this._addHousePart("roofRedTopMid.png", x, y - 210);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210);

    this._addHousePart("chimneyThin.png", x + 120, y - 280);
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y) {
    this._addHousePart("houseBeigeBottomLeft.png", x, y);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70);
    this._addHousePart("houseBeige.png", x + 70, y - 70);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70);

    this._addHousePart("windowCheckered.png", x + 25, y - 40);
    this._addHousePart("doorTop.png", x + 110, y - 70);
    this._addHousePart("doorKnobAlt.png", x + 110, y);

    this._addHousePart("houseBeigeMidLeft.png", x, y - 140);
    this._addHousePart("houseBeige.png", x + 70, y - 140);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 140);

    this._addHousePart("windowCheckered.png", x + 25, y - 130);
    this._addHousePart("windowCheckered.png", x + 110, y - 130);

    this._addHousePart("roofRedRight.png", x - 70, y - 210);
    this._addHousePart("roofRedTopMid.png", x, y - 210);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 210);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 210);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 210);

    this._addHousePart("chimneyLow.png", x + 120, y - 280);
}

HouseBuilder.prototype.getOneBoyGood = function(x, y) {
    this._addHousePart("houseBeigeBottomLeft.png", x, y);
    this._addHousePart("houseBeigeBottomMid.png", x + 70, y);
    this._addHousePart("houseBeigeBottomRight.png", x + 140, y);
    this._addHousePart("houseBeigeMidLeft.png", x, y - 70);
    this._addHousePart("houseBeige.png", x + 70, y - 70);
    this._addHousePart("houseBeigeMidRight.png", x + 140, y - 70);

    this._addHousePart("windowCheckered.png", x + 25, y - 40);
    this._addHousePart("doorTop.png", x + 110, y - 70);
    this._addHousePart("doorKnobAlt.png", x + 110, y);

    this._addHousePart("roofRedRight.png", x - 70, y - 140);
    this._addHousePart("roofRedTopMid.png", x, y - 140);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 140);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 140);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 140);

    this._addHousePart("chimneyLow.png", x + 120, y - 210);
}

HouseBuilder.prototype.getOneBoyBad = function(x, y) {
    this._addHousePart("houseDarkBottomLeft.png", x, y);
    this._addHousePart("houseDarkBottomMid.png", x + 70, y);
    this._addHousePart("houseDarkBottomRight.png", x + 140, y);
    this._addHousePart("houseDarkMidLeft.png", x, y - 70);
    this._addHousePart("houseDark.png", x + 70, y - 70);
    this._addHousePart("houseDarkMidRight.png", x + 140, y - 70);

    this._addHousePart("windowCheckered.png", x + 25, y - 40);
    this._addHousePart("doorTop.png", x + 110, y - 70);
    this._addHousePart("doorKnobAlt.png", x + 110, y);

    this._addHousePart("roofRedRight.png", x - 70, y - 140);
    this._addHousePart("roofRedTopMid.png", x, y - 140);
    this._addHousePart("roofRedTopMid.png", x + 70, y - 140);
    this._addHousePart("roofRedTopMid.png", x + 140, y - 140);
    this._addHousePart("roofRedTopLeft.png", x + 210, y - 140);

    this._addHousePart("chimneyThin.png", x + 120, y - 210);
}