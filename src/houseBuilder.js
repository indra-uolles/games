function HouseBuilder(game) {
    this.game = game;
    this.houses = [];
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
    sprite.animations.play('show', 12);
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
    return housePart.key.indexOf('Chimney') != -1;
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
    var houseSprite,
        house = this.game.add.group(),
        houseType = 0;

    this._addHousePart("houseDarkWalls", house, x, y, houseType, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createHappyBoyAnim(houseSprite, house, 1);
    this._createHappyEvilAnim(houseSprite, house, 1);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 35, houseType, houseNum);
    houseSprite.floor = 2;
    this._createHappyBoyAnim(houseSprite, house, 2);
    this._createHappyEvilAnim(houseSprite, house, 2);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 35,houseType, houseNum);
    this._createBabkaAnim(houseSprite, house);

    this._addHousePart("roof", house, x - 8, y - 93, houseType, houseNum);

    this._addHousePart("houseDarkChimney", house, x + 120, y - 127, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getTwoBoysFirstGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 1;

    this._addHousePart("houseBeigeWalls", house, x, y, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 125, houseType, houseNum);
    houseSprite.floor = 1;
    this._createHappyBoyAnim(houseSprite, house, 1);
    this._createHappyEvilAnim(houseSprite, house, 1);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 35, houseType, houseNum);
    houseSprite.floor = 2;
    this._createHappyBoyAnim(houseSprite, house, 2);
    this._createHappyEvilAnim(houseSprite, house, 2);

    houseSprite = this._addHousePart("windowCheckered", house, x + 115, y + 35, houseType, houseNum);
    this._createBabkaAnim(houseSprite, house);

    this._addHousePart("roof", house, x - 8, y - 93, houseType, houseNum);

    this._addHousePart("houseBeigeChimney", house, x + 120, y - 127, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyGood = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 2;

    this._addHousePart("houseBeigeWalls", house, x, y, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 125, houseType, houseNum);
    this._createHappyBoyAnim(houseSprite, house);
    this._createHappyEvilAnim(houseSprite, house);
    this._createBabkaAnim(houseSprite, house);

    this._addHousePart("roof", house, x - 8, y, houseType, houseNum);
    this._addHousePart("houseBeigeChimney", house, x + 120, y - 33, houseType, houseNum);

    return house;
}

HouseBuilder.prototype.getOneBoyBad = function(x, y, houseNum) {
    var houseSprite,
        house = this.game.add.group(),
        houseType = 3;

    this._addHousePart("houseDarkWalls", house, x, y, 0, houseNum);

    houseSprite = this._addHousePart("windowCheckered", house, x + 30, y + 125, houseType, houseNum);
    this._createHappyBoyAnim(houseSprite, house);
    this._createHappyEvilAnim(houseSprite, house);
    this._createBabkaAnim(houseSprite, house);

    this._addHousePart("roof", house, x - 8, y, houseType, houseNum);
    this._addHousePart("houseDarkChimney", house, x + 120, y - 33, houseType, houseNum);

    return house;
}

HouseBuilder.prototype._addHousePart = function(name, house, x, y, houseType, houseNum) {
    var sprite = this.game.add.sprite(x, y, name);
    house.add(sprite);

    this.game.physics.arcade.enable(sprite);
    sprite.body.velocity.x = -200;
    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(this.goodbye, this);

    sprite.houseType = houseType;
    sprite.houseNum = houseNum;

    return sprite;
}

HouseBuilder.prototype._createBabkaAnim = function(window, house) {
    var babka = this.game.add.sprite(0, 0, 'babka');
    babka.animations.add('show');
    this._createWindowAnim(babka, window, house);
}

HouseBuilder.prototype._createHappyBoyAnim = function(window, house, floor) {
    var boy = this.game.add.sprite(0, 0, 'boy');
    boy.animations.add('show');
    boy.floor = floor;
    this._createWindowAnim(boy, window, house);
}

HouseBuilder.prototype._createHappyEvilAnim = function(window, house, floor) {
    var evil = this.game.add.sprite(0, 0, 'evil');
    evil.animations.add('show');
    evil.floor = floor;
    this._createWindowAnim(evil, window, house);
}

HouseBuilder.prototype._createWindowAnim = function(sprite, window, house) {
    sprite.alignIn(window, Phaser.CENTER_CENTER);
    sprite.visible = false;
    this.game.physics.arcade.enable(sprite);
    sprite.body.velocity.x = -200;
    house.add(sprite);
}