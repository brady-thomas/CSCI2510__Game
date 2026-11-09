class Lettuce extends GameObjects {
    constructor() {
        super("Lettuce", ["Lettuce"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "palegreen", points:[
            new Vector2(-21,-26),
            new Vector2(-21,16),
            new Vector2(21,16),
            new Vector2(21,-26)
        ]})

        this.addComponent(new Polygon(), {fillStyle: "lightgreen", points:Assets.ham})

        this.transform.scale = new Vector2(2.5,2)
    }
}