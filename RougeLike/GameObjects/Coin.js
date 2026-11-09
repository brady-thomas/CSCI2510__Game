class Coin extends GameObjects {
    constructor() {
        super("Coin", ["Coin"], "coins")

        this.addComponent(new Polygon(), {fillStyle: "orange", points:[
            new Vector2(-12, -12),
            new Vector2(12, -12),
            new Vector2(12, 12),
            new Vector2(-12, 12)
        ]})


        this.addComponent(new Polygon(), {fillStyle: "gold", points:Assets.square})
        

        this.transform.scale = new Vector2(1, 1)

    }
}