class TeleporterOneGameObject extends GameObjects{
    constructor(){
        super("TeleporterOne", ["TeleporterOne"], "platforms")
        
        this.addComponent(new TeleporterOneController())

        this.addComponent(new Polygon(), {fillStyle: "#2d013c", points:Assets.platform})
        this.transform.scale = new Vector2(.5, 1)
        
        this.addComponent(new Collider())

    }
}