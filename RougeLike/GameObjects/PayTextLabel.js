class PayTextLabel extends GameObjects{
    constructor(){
        super("PayTextLabel", ["PayTextLabel"], "labels")

        this.addComponent(new TextLabel(), {fillStyle: "white", font: "24px VT323", align: "left", text: "Pay"})
    }

}