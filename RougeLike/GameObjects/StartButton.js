class StartButton extends GameObjects{
    constructor(){
        super("StartButton", ["StartButton"], "buttons")

        this.addComponent(new Polygon(), {fillStyle: "skyblue", points:Assets.platform})
        this.addComponent(new StartButtonController())

        this.transform.scale = new Vector2(2.8, 1)


        this.addComponent(new Collider())

        
    }
}