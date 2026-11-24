class GastaTwo extends Scene{

    constructor(){
        super("skyblue")

        this.instantiate(new GastaLetterTwo(), new Vector2(-200, -200))
        this.instantiate(new GastaLetterOneHead(), new Vector2(-200, -300))


        this.instantiate(new LetterGameObject(), new Vector2(-200,-150))
       
        this.instantiate(new PayGastaButton(), new Vector2(-25,300))
        this.instantiate(new PayTextLabel(), new Vector2(-100,305))
        
        this.instantiate(new Coin(), new Vector2(-700,-400))
        this.instantiate(new MoneyTextLabel(), new Vector2(-680, -390))

        this.instantiate(new PauseButton(), new Vector2(650, -350))
        this.instantiate(new PauseSymbol(), new Vector2(655, -350))
        this.instantiate(new PauseSymbol(), new Vector2(645, -350))
    }

}