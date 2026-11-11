class Salami extends GameObjects{
    constructor(){
        super("Salami", ["Salami"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "darkred", points: [
            new Vector2(-15,-15),
            new Vector2(-15,15),
            new Vector2(15,15),
            new Vector2(15,-15),
        ]})

        this.addComponent(new Polygon(), {fillStyle: "darkred", points:Assets.tomato})

        this.addComponent(new Polygon(), {fillStyle: "salmon", points:Assets.square})

        this.addComponent(new ToppingController())
        
        

        this.transform.scale = new Vector2(1.5,2)

    }
}