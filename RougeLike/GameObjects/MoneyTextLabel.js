class MoneyTextLabel extends GameObjects {
    constructor() {
        super("MoneyTextLabel", ["MoneyTextLabel"], "UI")

        this.addComponent(new TextLabel(), {text: Globals.moneyLabel, fillStyle: "gold", font: "20px Sixtyfour"})
    }
}