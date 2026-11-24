class PickOne extends Scene{
    constructor(){
        super("skyblue")
        // this.instantiate(new Ham(), new Vector2(0,0))
        // this.instantiate(new Turkey(), new Vector2(100,0))
        // this.instantiate(new Lettuce(), new Vector2(200,0))
        // this.instantiate(new Tomato(), new Vector2(300,0))
        // this.instantiate(new AmericanCheese(), new Vector2(400,0))

        this.instantiate(new PickGameObject(), new Vector2(-400,300))
        this.instantiate(new PickGameObject(), new Vector2(0,300))
        this.instantiate(new PickGameObject(), new Vector2(400,300))


        //this.instantiate(new Descriptions(), new Vector2(0,0))




        this.instantiate(new Coin(), new Vector2(-700,-400))
        this.instantiate(new MoneyTextLabel(), new Vector2(-680, -390))


        this.instantiate(new InventoryGameObject(), new Vector2(-700,-100))

        this.instantiate(new PauseButton(), new Vector2(650, -350))
        this.instantiate(new PauseSymbol(), new Vector2(655, -350))
        this.instantiate(new PauseSymbol(), new Vector2(645, -350))
        
    }
}