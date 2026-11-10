class Bacon extends GameObjects{
    constructor(){
        super("Bacon", ["Bacon"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "darkred", points:[
            new Vector2(-21,-26),
            new Vector2(-21,16),
            new Vector2(21,16),
            new Vector2(21,-26)



        ]})


        this.addComponent(new Polygon(), {fillStyle: "indianred", points:Assets.ham})
        this.transform.scale = new Vector2(2.5, 1.2)
    }
}