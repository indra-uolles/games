function ScoreCounter(game) {
    this.game = game;
    this.scoring = {};
    this.score = 0;
}

ScoreCounter.prototype.onCollide = function(e) {
    //console.log("collide " + e.hitPart + " " + e.houseType + " " + e.houseNum);
    this._updateScoring(e.houseNum, e.houseType, e.hitPart);

    var result = this._getHitResult(e.hitPart, e.houseNum);
    this.score += result.score;
    this.game.onAfterCollideSignal.dispatch({
        name: result.name,
        floor: result.floor
    });
}

ScoreCounter.prototype.getScore = function() {
    return this.score;
}

ScoreCounter.prototype._updateScoring = function(houseNum, houseType, hitPart) {
    if (!(houseNum in this.scoring)) {
        this.scoring[houseNum] = {
            type: houseType,
            roofHits: 0,
            chimneyHits: 0
        };
    }

    if (hitPart == 'chimney') {
        this.scoring[houseNum].chimneyHits += 1;
    } else {
        this.scoring[houseNum].roofHits += 1;
    }
}

ScoreCounter.prototype._getHitResult = function(hitPart, index) {
    var name, floor,
        type = this._getHouseType(index),
        chimneyHits = this._getChimneyHits(index),
        roofHits = this._getRoofHits(index);

    var score = 0;

    if (hitPart == "chimney") {
        if (type == 0 && chimneyHits == 0 || type == 0 && chimneyHits == 1) {
            name = "evil";
            floor = 2;
        } else if (type == 1 && chimneyHits == 0) {
            name = "boy";
            floor = 2;
            score += 1;
        } else if (type == 1 && chimneyHits == 1) {
            name = "evil";
            floor = 1;
        } else if (type == 2 && chimneyHits == 0) {
            name = "boy";
            score += 1;
        } else if (type == 3 && chimneyHits == 0) {
            name = "evil";
        }
    } else if (hitPart == "roof") {
        name = "babka";
    }

    return {
        name: name,
        floor: floor,
        score: score
    }
}

ScoreCounter.prototype._getHouseType = function(index) {
    return this.scoring[index].type;
}

ScoreCounter.prototype._getChimneyHits = function(index) {
    return this.scoring[index].chimneyHits;
}

ScoreCounter.prototype._getRoofHits = function(index) {
    return this.scoring[index].roofHits;
}