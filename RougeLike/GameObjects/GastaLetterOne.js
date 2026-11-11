class GastaLetterOne extends GameObjects{
    constructor(){
        super("GastaLetterOne", ["GastaLetterOne"], "labels")

        
        

        this.addComponent(new MultiLineTextLabel(), {fillStyle: "black", font: "32px VT323", align: "center", maxWidth: 400,
             text: "The Gambling and Sandwich Tax Association has noticed your activities. Since you are still a bottom feeder, " +
             "we will only be charging you a small fee of ¢200 by the end of the week. But if this behavior continues, " +
             "we will be forced to take more drastic action.                        --- GASTA"})
    }
}