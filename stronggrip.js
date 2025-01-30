class StrongGrip extends Upgrade {
    constructor(upgradeName, cost, farm){
        super(upgradeName, cost)
        this.farm = farm;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.farm.doubleUpgrade++;
        this.farm.applyDoubleUpgrade();
    }
}