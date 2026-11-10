class Mustard extends GameObjects{
    constructor(){
        super("Mustard", ["Mustard"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "yellow", points:Assets.sauce})

        this.addComponent(new TextLabel(), {text: "M", fillStyle: "black", font: "20px VT323", textAlign: "center"})

        this.transform.scale = new Vector2(1.5,2)

    }
}