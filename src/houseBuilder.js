function HouseBuilder(game) {
    this.game = game;
    this.houses = [];
    this.houseAnims = [];
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
        houseAnim = this.houseAnims[e.houseNum];

    if (typeof(floor) != 'undefined') {
        sprite = houseAnim.filter(function(child, index, children){
            return child.key == name && child.floor == floor;
        }).list[0];
    } else {
        sprite = houseAnim.filter(function(child, index, children){
            return child.key == name;
        }).list[0];
    }

    sprite.visible = true;
    sprite.animations.play('show', 6);

    if (showBurst) {
        spriteBurst = houseAnim.filter(function(child, index, children){
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
    var hitPart = this.isChimneyHit(housePartObj) ? 'chimney' : 'roof';
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
        //а не надо вычитать -1?
        houseNum = this.houses.length,
        data;

    if (num == 0) {
        data = this.getTwoBoysFirstBad(x, y, houseNum);
    } else if (num == 1) {
        data = this.getTwoBoysFirstGood(x, y, houseNum);
    } else if (num == 2) {
        data = this.getOneBoyGood(x, y, houseNum);
    } else {
        data = this.getOneBoyBad(x, y, houseNum);
    }

    this.houses.push(data.house);
    this.houseAnims.push(data.houseAnim);
}

HouseBuilder.prototype.getTwoBoysFirstBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseAnim = this.game.add.group(),
        houseType = 0;

    houseSprite = this._addHousePart('houseDarkWalls', house, x, y, houseType, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum, 1);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum, 1);

    houseSprite = this._addHousePart('windowCheckered', house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 55,houseType, houseNum);
    houseSprite.floor = 2;
    //TO DO: сделать common params и пусть каждый берёт оттуда что нужно
    //а то какой-то развесистый песец из параметров в функциях
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum, 2);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum, 2);
    this._createWindowAnim('babka', houseSprite, houseAnim, houseNum);

    this._addHousePart("roof", house, x - 8, y - 19, houseType, houseNum);

    houseSprite = this._addHousePart('houseDarkChimney', house, x + 120, y - 46, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, houseAnim, houseNum);

    return { house: house, houseAnim: houseAnim };
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseAnim = this.game.add.group(),
        houseType = 1;

    houseSprite = this._addHousePart('houseBeigeWalls', house, x, y, houseType, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum, 1);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum, 1);

    houseSprite = this._addHousePart('windowCheckered', house, x + 30, y + 55, houseType, houseNum);

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 55, houseType, houseNum);
    houseSprite.floor = 2;
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum, 2);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum, 2);
    this._createWindowAnim('babka', houseSprite, houseAnim, houseNum);

    this._addHousePart('roof', house, x - 8, y - 19, houseType, houseNum);

    houseSprite = this._addHousePart('houseBeigeChimney', house, x + 120, y - 45, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, houseAnim, houseNum);

    return { house: house, houseAnim: houseAnim };
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseAnim = this.game.add.group(),
        houseType = 2;

    houseSprite = this._addHousePart('houseBeigeWallsSmall', house, x, y + 85, houseType, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart('windowCheckered', house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum);
    this._createWindowAnim('babka', houseSprite, houseAnim, houseNum);

    this._addHousePart('roof', house, x - 8, y + 45, houseType, houseNum);
    houseSprite = this._addHousePart('houseBeigeChimney', house, x + 120, y + 20, houseType, houseNum);
    this._createChimneyAnim('burst', houseSprite, houseAnim, houseNum);

    return { house: house, houseAnim: houseAnim };
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseAnim = this.game.add.group(),
        houseType = 3;

    houseSprite = this._addHousePart("houseDarkWallsSmall", house, x, y + 85, houseType, houseNum);
    // var i = this.houses.length;
    // houseSprite.addChild(game.add.text(20, 40, i,
    //         { font: "30px Arial", fill: "#000000" }));

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 125, houseType, houseNum);
    this._createWindowAnim('boy', houseSprite, houseAnim, houseNum);
    this._createWindowAnim('evil', houseSprite, houseAnim, houseNum);
    this._createWindowAnim('babka', houseSprite, houseAnim, houseNum);

    this._addHousePart("roof", house, x - 8, y + 45, houseType, houseNum);
    this._addHousePart("houseDarkChimney", house, x + 120, y + 19, houseType, houseNum);
    houseSprite = this._createChimneyAnim('burst', houseSprite, houseAnim, houseNum);

    return { house: house, houseAnim: houseAnim };
}

HouseBuilder.prototype._addHousePart = function(name, house, x, y, houseType, houseNum) {
    var pool = this.poolsArr[name];
    var sprite = pool.create(x, y, { houseType: houseType, houseNum: houseNum });

    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(function(sprite){
        if (sprite.x < -sprite.width) {
            sprite.exists = false;
            sprite.body.destroy();
        }
    }, this);
    house.add(sprite);

    return sprite;
}

HouseBuilder.prototype._createWindowAnim = function(name, window, houseAnim, houseNum, floor) {
    var pool = this.poolsArr[name],
        data = { houseNum: houseNum };
    if (name != 'babka') {
        data.floor = floor;
    }
    var sprite = pool.create(0, 0, data);
    sprite.alignIn(window, Phaser.CENTER_CENTER);
    houseAnim.add(sprite);

    return sprite;
}

HouseBuilder.prototype._createChimneyAnim = function(name, chimney, houseAnim, houseNum) {
    var pool = this.poolsArr[name];
    var sprite = pool.create(0, 0, { houseNum: houseNum });

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
    houseAnim.add(sprite);

    return sprite;

}