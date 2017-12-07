function HouseBuilder(game) {
    this.game = game;
    this.houses = [];
    this.windowAnims = [];
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
        'evil': new Pool(this.game, WindowAnim, 5, 'evil'),
        'burst': new Pool(this.game, Burst, 5, 'burst'),
    };
}

HouseBuilder.prototype.onAfterCollide = function(e) {
    var sprite,
        spriteBurst,
        floor = e.floor,
        name = e.name,
        showBurst = e.showBurst,
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

    if (showBurst) {
        spriteBurst = house.filter(function(child, index, children){
                return child.key == 'burst';
        }).list[0];
        spriteBurst.visible = true;
        spriteBurst.animations.play('show', 6);
    }
}

HouseBuilder.prototype.checkCollision = function(gifts) {
    for (var i = 0; i < this.houses.length; i++) {
        //console.log("check collision: house " + i);
        this.game.physics.arcade.overlap(gifts, this.houses[i], this.onCollide, null, this);
    }
}

HouseBuilder.prototype.onCollide = function(gift, housePartObj) {
    //переделать?
    var isWindowAnimHit = false;
    if (housePartObj.key == 'burst' || housePartObj.key == 'babka' || housePartObj.key == 'boy' || housePartObj.key == 'evil') {
        isWindowAnimHit = true;
    }
    if (!isWindowAnimHit) {
        var hitPart = this.isChimneyHit(housePartObj) ? 'chimney' : 'roof';
        this.game.onCollideSignal.dispatch({
            hitPart: hitPart,
            houseType: housePartObj.houseType,
            houseNum: housePartObj.houseNum
        });

        gift.kill();
    }
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

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 0;

    houseSprite = this._addHousePart('houseDarkWalls', house, x, y, houseType, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, house, 1);
    this._createWindowAnim('evil', houseSprite, house, 1);

    houseSprite = this._addHousePart('windowCheckered', house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 55,houseType, houseNum);
    houseSprite.floor = 2;
    this._createWindowAnim('boy', houseSprite, house, 2);
    this._createWindowAnim('evil', houseSprite, house, 2);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y - 19, houseType, houseNum);

    houseSprite = this._addHousePart('houseDarkChimney', house, x + 120, y - 46, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, house);

    return house;
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 1;

    houseSprite = this._addHousePart('houseBeigeWalls', house, x, y, 0, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, house, 1);
    this._createWindowAnim('evil', houseSprite, house, 1);

    houseSprite = this._addHousePart('windowCheckered', house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 55, houseType, houseNum);
    houseSprite.floor = 2;
    this._createWindowAnim('boy', houseSprite, house, 2);
    this._createWindowAnim('evil', houseSprite, house, 2);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart('roof', house, x - 8, y - 19, houseType, houseNum);

    houseSprite = this._addHousePart('houseBeigeChimney', house, x + 120, y - 45, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, house);

    return house;
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 2;

    houseSprite = this._addHousePart('houseBeigeWallsSmall', house, x, y + 85, 0, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, house);
    this._createWindowAnim('evil', houseSprite, house);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart('roof', house, x - 8, y + 45, houseType, houseNum);
    houseSprite = this._addHousePart('houseBeigeChimney', house, x + 120, y + 20, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, house);

    return house;
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 3;

    houseSprite = this._addHousePart("houseDarkWallsSmall", house, x, y + 85, 0, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, house);
    this._createWindowAnim('evil', houseSprite, house);
    this._createWindowAnim('babka', houseSprite, house);

    this._addHousePart("roof", house, x - 8, y + 45, houseType, houseNum);
    this._addHousePart("houseDarkChimney", house, x + 120, y + 19, houseType, houseNum);
    houseSprite = this._createChimneyAnim('burst', houseSprite, house);

    return house;
}

HouseBuilder.prototype._addHousePart = function(name, house, x, y, houseType, houseNum) {
    var pool = this.poolsArr[name];
    var sprite = pool.create(x, y, { houseType: houseType, houseNum: houseNum });
    house.add(sprite);

    sprite.checkWorldBounds = true;
    //sprite.events.onOutOfBounds.add(this.goodbye, this);
    sprite.events.onOutOfBounds.add(function(sprite){
        if (sprite.x < -sprite.width) {
            sprite.exists = false;
            sprite.body.destroy();
        }
    }, this);

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

HouseBuilder.prototype._createChimneyAnim = function(name, chimney, house) {
    var pool = this.poolsArr[name];
    var sprite = pool.create(0, 0);

    sprite.alignIn(chimney, Phaser.TOP_CENTER);
    //высота спрайта
    sprite.y -= 80;

    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(function(sprite){
        if (sprite.x < -sprite.width) {
            sprite.exists = false;
            sprite.body.destroy();
        }
    }, this);

    house.add(sprite);
}