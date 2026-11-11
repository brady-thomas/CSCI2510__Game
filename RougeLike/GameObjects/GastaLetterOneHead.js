class GastaLetterOneHead extends GameObjects{
    constructor(){
        super("GastaLetterOneHead", ["GastaLetterOneHead"], "labels")

        this.addComponent(new TextLabel(), {fillStyle: "red", font: "55px VT323", align: "center", text: "GASTA Notice"})
    }
}