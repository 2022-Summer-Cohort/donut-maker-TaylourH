class DonutMaker {
    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._multiplierCount = 0;
        this._autoClickerCost = 100;
        this._multiplierCost = 10;
    }

    get donutCount() {
        return this._donutCount;
    }
    get autoClickerCount() {
        return this._autoClickerCount;
    }
    get multiplierCount() {
        return this._multiplierCount;
    }
    get autoClickerCost() {
        return this._autoClickerCost;
    }
    get multiplierCost() {
        return this._multiplierCost;
    }

    addDonut() {
        this._donutCount+= Math.pow(1.2, this._multiplierCount);
    }

    autoClick() {
        for (let i = 0; i < this._autoClickerCount; i++) {
          this.addDonut();
        }
    }

    buyAutoClicker() {
        if (this._donutCount >= this._autoClickerCost) {
            this._autoClickerCost *= 1.1;
            this._autoClickerCount++;
            this._donutCount -= this._autoClickerCost;
        }
    }

    buyMultiplier() {
        if (this._donutCount >= this._multiplierCost) {
            this._multiplierCost *= 1.1;
            this._multiplierCount++;
            this._donutCount -= this._multiplierCost;
        }
    }
}

export default DonutMaker;