class Descriptions extends GameObjects{
    constructor(){
        super("Descriptions", ["Description"], "labels")


        this.addComponent(new MultiLineTextLabel(), {fillStyle: "white", font: "40px VT323", maxWidth: 200})
    }
}