class ContinueTextLabel extends GameObjects{
    constructor(){
        super("ContinueTextLabel", ["ContinueTextLabel"], "labels")

        


        this.addComponent(new TextLabel(), {fillStyle: "white", font: "24px VT323", align: "left", text: "Continue Behavior"})
    }
}