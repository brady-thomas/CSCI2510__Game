class GastaOne extends Scene{
    constructor(){
        super("skyblue")

        
        this.instantiate(new GastaLetterOne(), new Vector2(-200, -200))
        this.instantiate(new GastaLetterOneHead(), new Vector2(-200, -300))


        this.instantiate(new LetterGameObject(), new Vector2(-200,-150))
       
        this.instantiate(new ContinueBehaviorButton(), new Vector2(-25,300))
        this.instantiate(new ContinueTextLabel(), new Vector2(-100,305))
        

        

    }   

}