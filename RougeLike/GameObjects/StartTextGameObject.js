class StartTextGameObject extends GameObjects{
    constructor(){
        super("StartText", ["StartText"], "UI")

        this.addComponent(new TextLabel(), {text: "Press To Start", font: "40px Sixtyfour", fillStyle: "white", textAlign: "center"})
        





    }
}