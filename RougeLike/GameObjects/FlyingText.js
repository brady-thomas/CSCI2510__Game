class FlyingText extends GameObjects{
    constructor(){
        super("FlyingText", ["FlyingText"], "coins")

        this.addComponent(new RigidBody(), {gravity: -500})

        this.addComponent(new FlyingTextController())

        this.addComponent(new MultiLineTextLabel(), {text: "Flying Text", fillStyle:"black", maxWidth: 200, font:"32px VT323"})
    }
}