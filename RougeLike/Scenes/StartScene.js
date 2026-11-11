class StartScene extends Scene{
    constructor(){
        super("skyblue")

        this.instantiate(new StartTextGameObject(), new Vector2(10, -25))
        this.instantiate(new StartButton(), new Vector2(10, -25))


        //this.instantiate(new Mustard(), new Vector2(0, 0))

    }
}