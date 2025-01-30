class Farm {
    constructor(farmName, baseCps, baseCost){
        this.farmName = farmName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.buttonId = 'buy' + farmName.replace(/\s/g, '');
        this.amountOwned = 0;
        this.doubleUpgrade = 1;
        this.cps = 0;
        this.visible = false; // !!!!Change this to false!!!!!!
    }

    purchase() {
        score -= this.cost;
        this.amountOwned++;
        this.applyDoubleUpgrade();
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.amountOwned);

    }

    applyDoubleUpgrade(){
        this.cps = this.baseCps * this.amountOwned * this.doubleUpgrade;     
    }

    buttonState() {
        if (!this.visible) {
            document.getElementById(this.buttonId).style.display = 'none';
            if (score >= this.baseCost) {
                this.visible = true;
                document.getElementById(this.buttonId).style.display =
                    'initial';
            }
        }

        if (score < this.cost) {
            document.getElementById(this.buttonId).disabled = true;
        } else {
            document.getElementById(this.buttonId).disabled = false;
        }

        document.getElementById(this.buttonId).innerHTML =
            'Buy ' +
            this.farmName +
            ' (Cost: $' +
            Math.ceil(this.cost).toLocaleString() +
            ') <br> Adds $' +
            (this.baseCps * this.doubleUpgrade * (1000 / tickRate)).toLocaleString() +
            ' Per Second <br> [Owned: ' +
            this.amountOwned +
            ']';
    }
}

        