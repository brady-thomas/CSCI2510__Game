class Ham extends GameObjects{
    constructor(){
        super("Ham", ["Ham"], "toppings")

        this.addComponent(new Polygon(), {fillStyle: "hotpink", points:[
            new Vector2(-11,-31),
            new Vector2(-11,11),
            new Vector2(31,11),
            new Vector2(31,-31)



        ]})

        this.addComponent(new Polygon(), {fillStyle: "pink", points:Assets.ham})


        

        this.transform.scale = new Vector2(2.5,2)


        

    }
}