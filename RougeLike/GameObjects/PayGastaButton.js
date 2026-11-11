class PayGastaButton extends GameObjects{
    constructor(){
        super("PayGastaButton", ["PayGastaButton"], "buttons")

        this.addComponent(new GastaPayController())

        this.addComponent(new Collider())

        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.platform})

        this.transform.scale = new Vector2(1, 1)
    }
}