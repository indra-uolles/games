export default class ScoreCounter {
    constructor(game) {
        this.game = game;
        this.scoring = {}
        this.score = 0;
    }

    reset() {
        this.score = 0;
        this.scoring = {}
    }

    onCollide(e) {
        this._updateScoring(e.houseNum, e.houseType, e.hitPart);
        var result = this._getHitResult(e.hitPart, e.houseNum);
        this.score += result.score;
        this.game.onAfterCollideSignal.dispatch({
            name: result.name,
            floor: result.floor,
            houseNum: e.houseNum,
            score: result.score,
            showWindowAnim: typeof (result.name) !== 'undefined',
            showBurst: result.score > 0
        });
    }

    getScore() {
        return this.score;
    }

    _updateScoring(houseNum, houseType, hitPart) {
        if (!(houseNum in this.scoring)) {
            this.scoring[houseNum] = {
                type: houseType,
                roofHits: 0,
                chimneyHits: 0
            }
        }

        if (hitPart == 'chimney') {
            this.scoring[houseNum].chimneyHits += 1;
        } else {
            this.scoring[houseNum].roofHits += 1;
        }
    }

    _getHitResult(hitPart, houseNum) {
        var name, floor,
            type = this._getHouseType(houseNum),
            chimneyHits = this._getChimneyHits(houseNum),
            roofHits = this._getRoofHits(houseNum),
            score = 0;

        if (hitPart == 'chimney') {
            // two boys first bad
            if (type == 0 && chimneyHits == 1 || type == 0 && chimneyHits == 2) {
                name = 'evil';
                floor = 2;
            // two boys first good
            } else if (type == 1 && chimneyHits == 1) {
                name = 'boy';
                floor = 2;
                score = 10;
            // two boys first good
            } else if (type == 1 && chimneyHits == 2) {
                name = 'evil';
                floor = 1;
            // one boy good +
            } else if (type == 2 && chimneyHits == 1) {
                name = 'boy';
                score = 10;
            // one boy bad +
            } else if (type == 3 && chimneyHits == 1) {
                name = 'evil';
            }
        } else if (hitPart == 'roof') {
            name = 'babka';
        }

        return {
            name: name,
            floor: floor,
            score: score
        }
    }

    _getHouseType(houseNum) {
        return this.scoring[houseNum].type;
    }

    _getChimneyHits(houseNum) {
        return this.scoring[houseNum].chimneyHits;
    }

    _getRoofHits(houseNum) {
        return this.scoring[houseNum].roofHits;
    }

}
