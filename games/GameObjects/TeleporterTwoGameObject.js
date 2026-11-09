class TeleporterTwoGameObject extends GameObjects{
    constructor(){
        super("TeleporterTwo", ["TeleporterTwo"], "platforms")
        
        this.addComponent(new TeleporterTwoController())

        this.addComponent(new Polygon(), {fillStyle: "#2d013c", points:Assets.platform})
        this.transform.scale = new Vector2(.5, 1)
        
        this.addComponent(new Collider())

    }
}