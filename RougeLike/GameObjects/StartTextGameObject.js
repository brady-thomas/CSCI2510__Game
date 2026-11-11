class StartTextGameObject extends GameObjects{
    constructor(){
        super("StartText", ["StartText"], "labels")

        this.addComponent(new TextLabel(), {text: "Press To Start", font: "40px Sixtyfour", fillStyle: "white", textAlign: "center"})
        





    }
}