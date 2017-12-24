class failsCounter {
    constructor(game) {
        this.game = game;
        this.fails = {
            'roofHits': 0,
            'giftWaste': 0,
            'giftToBad': 0
        };
    }

    reset() {
        this.fails = {
            'roofHits': 0,
            'giftWaste': 0,
            'giftToBad': 0
        };
    }


    //fails have different weights. I would freeze gifts for 1 roofHit, 3 gift waste cases, 2 gifts to bad boy
    getFailsScore() {
        return this.fails.roofHits + 0.3335*this.fails.giftWaste + 0.5*this.fails.giftToBad;
    }
}