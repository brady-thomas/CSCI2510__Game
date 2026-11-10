class Ranch extends GameObjects{
    constructor(){
        super("Ranch", ["Ranch"], "toppings")

        
        this.addComponent(new Polygon(), {fillStyle: "white", points:Assets.sauce})

        this.addComponent(new TextLabel(), {text: "R", fillStyle:"black", font: "20px VT323", textAlign: "center"})

        this.transform.scale = new Vector2(1.5,2)

    }
}