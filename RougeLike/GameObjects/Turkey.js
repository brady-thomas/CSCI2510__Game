class Turkey extends GameObjects {
    constructor() {
        super("Turkey", ["Turkey"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "darksalmon", points:[
            new Vector2(-21,-26),
            new Vector2(-21,16),
            new Vector2(21,16),
            new Vector2(21,-26)



        ]})

        this.addComponent(new Polygon(), {fillStyle: "lightsalmon", points:Assets.ham})


        

        this.transform.scale = new Vector2(2.5,2)
        this.addComponent(new ToppingController())

    }
}