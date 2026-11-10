class Tomato extends GameObjects{
    constructor(){
        super("Tomato", ["Tomato"], "toppings")


        this.addComponent(new Polygon(), {fillStyle: "tomato", points:[
            new Vector2(-15,-15),
            new Vector2(-15,15),
            new Vector2(15,15),
            new Vector2(15,-15),
        ]})

        this.addComponent(new Polygon(), {fillStyle: "red", points: Assets.tomato})

        this.transform.scale = new Vector2(2, 2)

        this.addComponent(new ToppingController())
    }
}