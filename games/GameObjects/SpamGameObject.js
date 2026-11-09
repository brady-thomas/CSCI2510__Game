class SpamGameObject extends GameObjects { 
    constructor(){
        super("Turret", ["Turret"], "evil")
        this.addComponent(new SpamController())


        this.addComponent(new Polygon(), {fillStyle: "chocolate", points:Assets.square})

        this.transform.scale = new Vector2(2.5, 2.5)
    }
}