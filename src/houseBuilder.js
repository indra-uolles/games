import Phaser from './Phaser';
import Pool from './Pool';
import HousePart from './HousePart';
import WindowAnim from './WindowAnim';
import Burst from './Burst';

export default class HouseBuilder {
    constructor(game) {
        this.game = game;
        this.houses = [];
        this.houseAnims = [];
    }

    init() {
        this.reset();
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
            'burst': new Pool(this.game, Burst, 5, 'burst')
        }
    }

    onAfterCollide(e) {
        var sprite,
            spriteBurst,
            floor = e.floor,
            name = e.name,
            // score = e.score,
            showWindowAnim = e.showWindowAnim,
            showBurst = e.showBurst,
            houseAnim = this.houseAnims[e.houseNum];

        if (showWindowAnim) {
            if (typeof (floor) !== 'undefined') {
                sprite = houseAnim.filter(function (child) {
                    return child.key == name && child.floor == floor;
                }).list[0];
            } else {
                sprite = houseAnim.filter(function (child) {
                    return child.key == name;
                }).list[0];
            }

            sprite.visible = true;
            sprite.animations.play('show', 6);
        }

        if (showBurst) {
            spriteBurst = houseAnim.filter(function (child) {
                return child.key == 'burst';
            }).list[0];
            spriteBurst.visible = true;
            spriteBurst.animations.play('show', 6);
        }
    }

    checkCollision(gifts) {
        for (var i = 0; i < this.houses.length; i++) {
            // console.log("check collision: house " + i);
            this.game.physics.arcade.overlap(gifts, this.houses[i], this.onCollide, null, this);
        }
    }

    onCollide(gift, housePartObj) {
        var hitPart = this.isChimneyHit(housePartObj) ? 'chimney' : 'roof';
        this.game.onCollideSignal.dispatch({
            hitPart: hitPart,
            houseType: housePartObj.houseType,
            houseNum: housePartObj.houseNum
        });

        gift.kill();
    }

    isChimneyHit(housePartObj) {
        return housePartObj.key.indexOf('Chimney') != -1;
    }

    isRoofHit(housePartObj) {
        return housePartObj.key.indexOf('roof') != -1;
    }

    getMaxPosX() {
        if (this.houses.length > 0) {
            return this.houses[this.houses.length - 1].x;
        } else {
            return -1;
        }
    }

    addHouse(x, y) {
        var num = this.game.rnd.integerInRange(0, 3),
            data;

        if (num == 0) {
            data = this.getTwoBoysFirstBad(x, y);
        } else if (num == 1) {
            data = this.getTwoBoysFirstGood(x, y);
        } else if (num == 2) {
            data = this.getOneBoyGood(x, y);
        } else {
            data = this.getOneBoyBad(x, y);
        }

        this.houses.push(data.house);
        this.houseAnims.push(data.houseAnim);
    }

    _getCommonParams() {
        return {
            house: this.game.add.group(),
            houseAnim: this.game.add.group(),
            houseNum: this.houses.length
        }
    }

    getTwoBoysFirstBad(x, y) {
        var houseSprite,
            params = this._getCommonParams();

        params.houseType = 0;

        houseSprite = this._addHousePart('houseDarkWalls', x, y, params);
        // var i = this.houses.length;
        // houseSprite.addChild(game.add.text(20, 40, i,
        //         { font: "30px Arial", fill: "#000000" }));

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 125, params);
        houseSprite.floor = 1;
        this._createWindowAnim('boy', houseSprite, params, 1);
        this._createWindowAnim('evil', houseSprite, params, 1);

        houseSprite = this._addHousePart('windowCheckered', x + 30, y + 55, params);

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 55, params);
        houseSprite.floor = 2;

        this._createWindowAnim('boy', houseSprite, params, 2);
        this._createWindowAnim('evil', houseSprite, params, 2);
        this._createWindowAnim('babka', houseSprite, params);

        this._addHousePart('roof', x - 8, y - 19, params);

        houseSprite = this._addHousePart('houseDarkChimney', x + 120, y - 46, params);
        this._createChimneyAnim('burst', houseSprite, params);

        return {house: params.house, houseAnim: params.houseAnim}
    }

    getTwoBoysFirstGood(x, y) {
        var houseSprite,
            params = this._getCommonParams();

        params.houseType = 1;

        houseSprite = this._addHousePart('houseBeigeWalls', x, y, params);
        // var i = this.houses.length;
        // houseSprite.addChild(game.add.text(20, 40, i,
        //         { font: "30px Arial", fill: "#000000" }));

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 125, params);
        houseSprite.floor = 1;
        this._createWindowAnim('boy', houseSprite, params, 1);
        this._createWindowAnim('evil', houseSprite, params, 1);

        houseSprite = this._addHousePart('windowCheckered', x + 30, y + 55, params);

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 55, params);
        houseSprite.floor = 2;
        this._createWindowAnim('boy', houseSprite, params, 2);
        this._createWindowAnim('evil', houseSprite, params, 2);
        this._createWindowAnim('babka', houseSprite, params);

        this._addHousePart('roof', x - 8, y - 19, params);

        houseSprite = this._addHousePart('houseBeigeChimney', x + 120, y - 45, params);
        this._createChimneyAnim('burst', houseSprite, params);

        return {house: params.house, houseAnim: params.houseAnim}
    }

    getOneBoyGood(x, y) {
        var houseSprite,
            params = this._getCommonParams();

        params.houseType = 2;

        houseSprite = this._addHousePart('houseBeigeWallsSmall', x, y + 85, params);
        // var i = this.houses.length;
        // houseSprite.addChild(game.add.text(20, 40, i,
        //         { font: "30px Arial", fill: "#000000" }));

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 125, params);
        this._createWindowAnim('boy', houseSprite, params);
        this._createWindowAnim('evil', houseSprite, params);
        this._createWindowAnim('babka', houseSprite, params);

        this._addHousePart('roof', x - 8, y + 45, params);
        houseSprite = this._addHousePart('houseBeigeChimney', x + 120, y + 20, params);
        this._createChimneyAnim('burst', houseSprite, params);

        return {house: params.house, houseAnim: params.houseAnim}
    }

    getOneBoyBad(x, y) {
        var houseSprite,
            params = this._getCommonParams();

        params.houseType = 3;

        houseSprite = this._addHousePart('houseDarkWallsSmall', x, y + 85, params);
        // var i = this.houses.length;
        // houseSprite.addChild(game.add.text(20, 40, i,
        //         { font: "30px Arial", fill: "#000000" }));

        houseSprite = this._addHousePart('windowCheckered', x + 115, y + 125, params);
        this._createWindowAnim('boy', houseSprite, params);
        this._createWindowAnim('evil', houseSprite, params);
        this._createWindowAnim('babka', houseSprite, params);

        this._addHousePart('roof', x - 8, y + 45, params);
        houseSprite = this._addHousePart('houseDarkChimney', x + 120, y + 19, params);
        this._createChimneyAnim('burst', houseSprite, params);

        return {house: params.house, houseAnim: params.houseAnim}
    }

    _addHousePart(name, x, y, params) {
        var pool = this.poolsArr[name];
        var sprite = pool.create(x, y, {houseType: params.houseType, houseNum: params.houseNum});

        sprite.checkWorldBounds = true;
        sprite.events.onOutOfBounds.add(function (sprite) {
            if (sprite.x < -sprite.width) {
                sprite.exists = false;
                sprite.body.destroy();
            }
        }, this);
        params.house.add(sprite);

        return sprite;
    }

    _createWindowAnim(name, window, params, floor) {
        var pool = this.poolsArr[name],
            data = {houseNum: params.houseNum}
        if (name != 'babka') {
            data.floor = floor;
        }
        var sprite = pool.create(0, 0, data);
        sprite.alignIn(window, Phaser.CENTER_CENTER);
        params.houseAnim.add(sprite);

        return sprite;
    }

    _createChimneyAnim(name, chimney, params) {
        var pool = this.poolsArr[name];
        var sprite = pool.create(0, 0, {houseNum: params.houseNum});

        sprite.alignIn(chimney, Phaser.TOP_CENTER);
        // высота спрайта
        sprite.y -= 80;

        sprite.checkWorldBounds = true;
        sprite.events.onOutOfBounds.add(function (sprite) {
            if (sprite.x < -sprite.width) {
                sprite.exists = false;
                sprite.body.destroy();
            }
        }, this);
        params.houseAnim.add(sprite);

        return sprite;

    }

    stop() {
        for (let i = 0; i < this.houses.length; i++) {
            var house = this.houses[i];
            for (let j = 0; j < house.children.length; j++) {
                var child = house.children[j];
                if (child.body) {
                    child.body.destroy();
                }
            }
        }
        for (let i = 0; i < this.houseAnims.length; i++) {
            var houseAnim = this.houseAnims[i];
            for (let j = 0; j < houseAnim.children.length; j++) {
                var anim = houseAnim.children[j];
                if (anim.body) {
                    anim.animations.stop();
                    anim.body.destroy();
                }
            }
        }
    }

    reset() {
        for (let i = 0; i < this.houses.length; i++) {
            var house = this.houses[i];
            if (house.children.length) {
                house.children.setAll('exists', false);
                house.removeAll();
            }
        }
        for (let i = 0; i < this.houseAnims.length; i++) {
            var houseAnim = this.houseAnims[i];
            if (houseAnim.children.length) {
                houseAnim.children.setAll('exists', false);
                houseAnim.removeAll();
            }
        }
        // empty arrays https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
        this.houses.length = 0;
        this.houseAnims.length = 0;
    }
}
