class MoneyTextLabel extends GameObjects {
    constructor() {
        super("MoneyTextLabel", ["MoneyTextLabel"], "labels")

        this.addComponent(new TextLabel(), {text: "  = " + Globals.money, fillStyle: "gold", font: "20px Sixtyfour"})
    }
}