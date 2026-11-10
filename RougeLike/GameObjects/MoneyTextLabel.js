class MoneyTextLabel extends GameObjects {
    constructor() {
        super("MoneyTextLabel", ["MoneyTextLabel"], "UI")

        this.addComponent(new TextLabel(), {text: "  = " + Globals.money, fillStyle: "gold", font: "20px Sixtyfour"})
    }
}