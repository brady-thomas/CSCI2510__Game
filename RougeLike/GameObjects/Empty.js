class Empty extends GameObjects{
    constructor(){
        super("Empty", ["Empty"], "toppings")


        this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.square})
        this.transform.scale = new Vector2(.5, .5)
        this.addComponent(new ToppingController())
    }
}