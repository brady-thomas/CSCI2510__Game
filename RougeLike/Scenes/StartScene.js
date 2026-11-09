class StartScene extends Scene{
    constructor(){
        super("skyblue")

        this.instantiate(new StartTextGameObject(), new Vector2(775, 405))
        this.instantiate(new StartButton(), new Vector2(10, -25))

    }
}