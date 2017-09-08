function ScoreCounter() {
    this.scoring = {};
}

ScoreCounter.prototype.add = function(i, type) {
    this.scoring[i] = {
        type: type,
        roofHits: 0,
        chimneyHits: 0
    };
}

ScoreCounter.prototype.getResult = function(housePart, index) {
    var name, floor,
        type = this._getHouseType(index),
        chimneyHits = this._getChimneyHits(index),
        roofHits = this._getRoofHits(index);

    if (housePart == "chimney") {
        if (type == 1 && chimneyHits == 0 || type == 1 && chimneyHits == 1) {
            name = "evil";
            floor = 2;
        } else if (type == 2 && chimneyHits == 0) {
            name = "boy";
            floor = 2;
        } else if (type == 2 && chimneyHits == 1) {
            name = "evil";
            floor = 1;
        } else if (type == 3 && chimneyHits == 0) {
            name = "boy";
        } else if (type == 4 && chimneyHits == 0) {
            name = "evil";
        }
    } else if (housePart == "roof") {
        name = "babka";
    }

    return {
        name: name,
        floor: floor
    }
}

ScoreCounter.prototype.updateRoofHits = function(index) {
    this.scoring[index].roofHits += 1;
}

ScoreCounter.prototype.updateChimneyHits = function(index) {
    this.scoring[index].chimneyHits += 1;
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