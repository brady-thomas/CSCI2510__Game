class GastaOne extends Scene{
    constructor(){
        super("skyblue")

        
        this.instantiate(new GastaLetterOne(), new Vector2(-200, -200))
        this.instantiate(new GastaLetterOneHead(), new Vector2(-200, -300))


        this.instantiate(new LetterGameObject(), new Vector2(-200,-150))
       
        this.instantiate(new ContinueBehaviorButton(), new Vector2(-25,300))
        this.instantiate(new ContinueTextLabel(), new Vector2(-100,305))

        this.instantiate(new PauseButton(), new Vector2(650, -350))
        this.instantiate(new PauseSymbol(), new Vector2(655, -350))
        this.instantiate(new PauseSymbol(), new Vector2(645, -350))
        
        // const pauseButton = this.instantiate(new PauseButton())
        // pauseButton.transform.anchorMin = new Vector2(.95, .05)
        // pauseButton.transform.anchorMax = new Vector2(.95, .05)
        // pauseButton.transform.offsetUpperLeft = new Vector2(-5, 0)
        // pauseButton.transform.offsetLowerRight = new Vector2(0, 5)
        
        

    }   

}