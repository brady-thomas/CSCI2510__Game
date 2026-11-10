class SlotOutline extends GameObjects{
    constructor(){
        super("SlotOutline", ["SlotOutline"], "background")

        this.addComponent(new Polygon(), {fillStyle: "orange", points:Assets.square})

        this.transform.scale = new Vector2(55, 50)
    }
}

