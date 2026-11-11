class GastaLetterTwo extends GameObjects{
    constructor(){
        super("GastaLetterTwo", ["GastaLetterTwo"], "labels")

        this.addComponent(new MultiLineTextLabel(), {fillStyle: "black", font: "32px VT323", align: "center", maxWidth: 400,
             text: "We noticed your recent increase in your gambling and sandwich consumption. " +
             "GASTA does not tolerate this continued behavior." +
             "You currently owe us ¢200. " +
             "Next week, you owe us ¢750.                   --- GASTA"})
    }
}