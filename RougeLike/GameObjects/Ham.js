class Ham extends GameObjects{
    constructor(){
        super("Ham", ["Ham"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "hotpink", points:[
            new Vector2(-21,-26),
            new Vector2(-21,16),
            new Vector2(21,16),
            new Vector2(21,-26)



        ]})

        this.addComponent(new Polygon(), {fillStyle: "pink", points:Assets.ham})


        

        this.transform.scale = new Vector2(2.5,2)


        

    }
}