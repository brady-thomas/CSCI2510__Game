class PickOne extends Scene{
    constructor(){
        super("skyblue")
        this.instantiate(new Ham(), new Vector2(0,0))

        
        this.instantiate(new Coin(), new Vector2(-700,-400))
        this.instantiate(new MoneyTextLabel(), new Vector2(75, 30))
    }
}