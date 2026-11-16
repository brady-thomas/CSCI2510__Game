class SlotScene extends Scene{
    constructor(){
        super("skyblue")


        this.instantiate(new SlotOutline(), new Vector2(0,100))

        this.instantiate(new SlotFrame(), new Vector2(-300,-200))
        this.instantiate(new SlotFrame(), new Vector2(-150,-200))
        this.instantiate(new SlotFrame(), new Vector2(0,-200))
        this.instantiate(new SlotFrame(), new Vector2(150,-200))
        this.instantiate(new SlotFrame(), new Vector2(300,-200))

        this.instantiate(new SlotFrame(), new Vector2(-300,-50))
        this.instantiate(new SlotFrame(), new Vector2(-150,-50))
        this.instantiate(new SlotFrame(), new Vector2(0,-50))
        this.instantiate(new SlotFrame(), new Vector2(150,-50))
        this.instantiate(new SlotFrame(), new Vector2(300,-50))

        this.instantiate(new SlotFrame(), new Vector2(-300,100))
        this.instantiate(new SlotFrame(), new Vector2(-150,100))
        this.instantiate(new SlotFrame(), new Vector2(0,100))
        this.instantiate(new SlotFrame(), new Vector2(150,100))
        this.instantiate(new SlotFrame(), new Vector2(300,100))

        this.instantiate(new SlotFrame(), new Vector2(-300,250))
        this.instantiate(new SlotFrame(), new Vector2(-150,250))
        this.instantiate(new SlotFrame(), new Vector2(0,250))
        this.instantiate(new SlotFrame(), new Vector2(150,250))
        this.instantiate(new SlotFrame(), new Vector2(300,250))
        

        this.instantiate(new CoinControllerGameObject(), new Vector2(500,0))

        this.instantiate(new Coin(), new Vector2(-700,-400))
        this.instantiate(new MoneyTextLabel(), new Vector2(-680, -390))


        //this.instantiate(new FlyingText(), new Vector2(0,0))

    }
}