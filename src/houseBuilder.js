function HouseBuilder(game) {
    this.game = game;
    this.houses = [];
}

HouseBuilder.prototype.init = function() {
    this.poolsArr = {
        'windowCheckered': new Pool(this.game, HousePart, 16, 'windowCheckered'),
        'houseDarkWalls': new Pool(this.game, HousePart, 5, 'houseDarkWalls'),
        'roof': new Pool(this.game, HousePart, 5, 'roof'),
        'houseDarkChimney': new Pool(this.game, HousePart, 5, 'houseDarkChimney'),
        'houseBeigeWalls': new Pool(this.game, HousePart, 5, 'houseBeigeWalls'),
        'houseBeigeChimney': new Pool(this.game, HousePart, 5, 'houseBeigeChimney'),
        'houseBeigeWallsSmall': new Pool(this.game, HousePart, 5, 'houseBeigeWallsSmall'),
        'houseDarkWallsSmall': new Pool(this.game, HousePart, 5, 'houseDarkWallsSmall'),
        'babka': new Pool(this.game, WindowAnim, 5, 'babka'),
        'boy': new Pool(this.game, WindowAnim, 5, 'boy'),
        'evil': new Pool(this.game, WindowAnim, 5, 'evil')
    };
}

HouseBuilder.prototype.onAfterCollide = function(e) {
    var sprite,
        floor = e.floor,
        name = e.name,
        house = this.houses[e.houseNum];

    if (typeof(floor) != 'undefined') {
        sprite = house.filter(function(child, index, children){
            return child.key == name && child.floor == floor;
        }).list[0];
    } else {
        sprite = house.filter(function(child, index, children){
            return child.key == name;
        }).list[0];
    }

    sprite.visible = true;
    sprite.animations.play('show', 6);
}

HouseBuilder.prototype.checkCollision = function(gifts) {
    for (var i = 0; i < this.houses.length; i++) {
        this.game.physics.arcade.overlap(gifts, this.houses[i], this.onCollide, null, this);
    }
}

HouseBuilder.prototype.onCollide = function(gift, housePartObj) {
    var hitPart = this.isChimneyHit(housePartObj) ? "chimney" : "roof";
    this.game.onCollideSignal.dispatch({
        hitPart: hitPart,
        houseType: housePartObj.houseType,
        houseNum: housePartObj.houseNum
    });

    gift.kill();
}

HouseBuilder.prototype.isChimneyHit = function(housePartObj) {
    return housePartObj.key.indexOf('Chimney') != -1;
}

HouseBuilder.prototype.isRoofHit = function(housePartObj) {
    return housePartObj.key.indexOf('roof') != -1;
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
        sprite.parent.setAll('exists', false);
        sprite.parent.removeAll(true);
    }
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 0;

    this._addHousePart("houseDarkWalls", house, x, y, houseType, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, house, 1);
    this._createWindowAnim('evil', houseSprite, house, 1);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 55,houseType, houseNum);
    houseSprite.floor = 2;
    this._createWindowAnim('boy', houseSprite, house, 2);
    this._createWindowAnim('evil', houseSprite, house, 2);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y - 19, houseType, houseNum);

    this._addHousePart("houseDarkChimney", house, x + 120, y - 45, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 1;

    this._addHousePart("houseBeigeWalls", house, x, y, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, house, 1);
    this._createWindowAnim('evil', houseSprite, house, 1);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 55, houseType, houseNum);
    houseSprite.floor = 2;
    this._createWindowAnim('boy', houseSprite, house, 2);
    this._createWindowAnim('evil', houseSprite, house, 2);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y - 19, houseType, houseNum);

    this._addHousePart("houseBeigeChimney", house, x + 120, y - 45, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 2;

    this._addHousePart("houseBeigeWallsSmall", house, x, y + 85, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, house);
    this._createWindowAnim('evil', houseSprite, house);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y + 45, houseType, houseNum);
    this._addHousePart("houseBeigeChimney", house, x + 120, y + 20, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 3;

    this._addHousePart("houseDarkWallsSmall", house, x, y + 85, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, house);
    this._createWindowAnim('evil', houseSprite, house);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y + 45, houseType, houseNum);
    this._addHousePart("houseDarkChimney", house, x + 120, y + 20, houseType, houseNum);

    return house;
}

HouseBuilder.prototype._addHousePart = function(name, house, x, y, houseType, houseNum) {
    var pool = this.poolsArr[name];
    var sprite = pool.create(x, y, { houseType: houseType, houseNum: houseNum });
    house.add(sprite);

    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(this.goodbye, this);

    return sprite;
}

HouseBuilder.prototype._createWindowAnim = function(name, window, house, floor) {
    var pool = this.poolsArr[name],
        data = {};
    if (name != 'babka') {
        data = { floor: floor };
    }
    var sprite = pool.create(0, 0, data);
    sprite.alignIn(window, Phaser.CENTER_CENTER);
    house.add(sprite);
}