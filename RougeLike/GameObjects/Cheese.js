class Cheese extends GameObjects{
    constructor(){
        super("AmericanCheese", ["AmericanCheese"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "gold", points:Assets.square})

        this.transform.scale = new Vector2(5, 5)

        this.addComponent(new ToppingController())
    }
}