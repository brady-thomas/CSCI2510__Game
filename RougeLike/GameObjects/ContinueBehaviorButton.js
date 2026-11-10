class ContinueBehaviorButton extends GameObjects{
    constructor(){
        super("ContinueBehaviorButton", ["ContinueBehaviorButton"], "buttons")

        this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.platform})

        
        this.addComponent(new ContinueButtonController())

        this.transform.scale = new Vector2(1,1)


        this.addComponent(new Collider())
    }
}