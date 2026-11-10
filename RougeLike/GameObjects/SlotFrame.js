class SlotFrame extends GameObjects{
    constructor(){
        super("SlotFrame", ["SlotFrame"], "background")

        this.addComponent(new Polygon(), {fillStyle: "black", points:[
            new Vector2(-11, -11),
            new Vector2(11, -11),
            new Vector2(11, 11),
            new Vector2(-11, 11)
        ]})

        this.addComponent(new Polygon(), {fillStyle: "whitesmoke", points:Assets.square})


        this.addComponent(new SpinController())

        this.transform.scale = new Vector2(7,7)
    }
}